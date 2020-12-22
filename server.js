const express = require("express");
const path = require("path");
/* Requiring express sessions to handle users logged in */
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");

//Making references to link our models by the defined references on each of them
//Here

// Creating express app and configuring middleware needed for authentication
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
require("./routes/apiRoutes")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our database
const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// Starting the express server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions)
    .then(function() {
        app.listen(PORT, () => {
            console.log(`🌎 ==> API server now on port ${PORT}!`);
        });
    });

module.exports = app;