// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
    /***************  SCHOOL API ROUTES ******************/
    //CREATE, Add new school to the database
    app.post("/api/school", (req, res) => {
        db.school
            .create({
                name: req.body.name,
                city: req.body.city,
                state: req.body.state,
                district: req.body.district,
                phone: req.body.phone,
            })
            .then(function(dbSchool) {
                res.json(dbSchool);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });
    //READ Get all schools GET
    app.get("/api/school", (req, res) => {
        db.school
            .findAll({})
            .then(function(dbGetSchools) {
                res.json(dbGetSchools);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });
    //READ Get a school by Id
    app.get("/api/school/:id", (req, res) => {
        db.school
            .findOne({
                where: {
                    id: req.params.id,
                },
            })
            .then(function(dbGetSchool) {
                res.json(dbGetSchool);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });
    //DELETE a school by querying a id
    app.delete("/api/school/:id", (req, res) => {
        db.school
            .destroy({
                where: {
                    id: req.params.id,
                },
            })
            .then(function(dbDeleteSchool) {
                res.json(dbDeleteSchool);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    //UPDATE a school info identified by id
    app.post("/api/school/:id", (req, res) => {
        db.school
            .update({
                name: req.body.name,
                city: req.body.city,
                state: req.body.state,
                district: req.body.district,
                phone: req.body.phone,
                updatedAt: Date.now(),
            }, {
                where: {
                    id: req.params.id,
                },
            })
            .then(function(dbUpdateSchool) {
                res.json(dbUpdateSchool);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    /***************  DAILY STATS API ROUTES ***************/
    //READ Get all daily stats
    app.get("/api/dailystat", (req, res) => {
        db.dailystat
            .findAll({})
            .then(function(dbDailyStats) {
                res.json(dbDailyStats);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    //CREATE record a new dailyStat
    app.post("/api/dailystat", (req, res) => {
        db.dailystat
            .create({
                dateofSurvey: req.body.dateofSurvey,
                mood: req.body.mood,
                studentId: req.body.studentId,
            })
            .then(function(dbDailyStat) {
                res.json(dbDailyStat);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    //DELETE a dailyStat by id
    app.delete("/api/dailystat/:id", (req, res) => {
        db.dailystat
            .destroy({
                where: {
                    id: req.params.id,
                },
            })
            .then(function(dbDeletedDailyStat) {
                res.json(dbDeletedDailyStat);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    //READ, Get all stats of a specific student id
    app.get("/api/dailystat/student/:id", (req, res) => {
        db.dailystat
            .findAll({
                where: {
                    studentId: req.params.id,
                },
            })
            .then(function(dbGetDailyStats) {
                res.json(dbGetDailyStats);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    //UPDATE a specific studentId stat where date is = date from req.body
    app.post("/api/dailystat/:id", (req, res) => {
        db.dailystat
            .update({
                dateofSurvey: req.body.dateofSurvey,
                mood: req.body.mood,
                updatedAt: Date.now(),
            }, {
                where: {
                    studentId: req.params.id,
                    dateofSurvey: req.body.dateofSurvey,
                },
            })
            .then(function(dbDailyStat) {
                res.json(dbDailyStat);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    /***************  testGAD7 API ROUTES ***************/
    //Get all testGAD7 READ ALL
    app.get("/api/testgad7", (req, res) => {
        db.testGAD7
            .findAll({})
            .then(function(dbGetTestGAD7) {
                res.json(dbGetTestGAD7);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    //Get all testGAD7 by student id READ student
    app.get("/api/testgad7/:id", (req, res) => {
        db.testGAD7
            .findAll({
                where: {
                    studentId: req.params.id,
                },
            })
            .then(function(dbTestGAD7) {
                res.json(dbTestGAD7);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    //CREATE a new testgad7
    app.post("/api/testgad7", (req, res) => {
        db.testGAD7
            .create({
                feeling: req.body.feeling,
                control: req.body.control,
                worrying: req.body.worrying,
                trouble: req.body.trouble,
                restless: req.body.restless,
                annoyed: req.body.annoyed,
                afraid: req.body.afraid,
                dateofGAD7: Date.now(),
                studentId: req.body.studentId,
            })
            .then(function(dbNewTestGad7) {
                res.json(dbNewTestGad7);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    /***************  TEST PHQ9 API ROUTES ***************/
    //READ all test
    app.get("/api/testphq9", (req, res) => {
        db.testPHQ9
            .findAll({})
            .then((dbTestPHQ9) => {
                res.json(dbTestPHQ9);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    //READ only tests related to a studentId
    app.get("/api/testphq9/:id", (req, res) => {
        db.testphq9
            .findAll({
                where: {
                    studentId: req.params.id,
                },
            })
            .then((dbTestPHQ9) => {
                res.json(dbTestPHQ9);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    //CREATE a new test PHQ9
    app.post("/api/testphq9", (req, res) => {
        db.testPHQ9
            .create({
                little: req.body.little,
                down: req.body.down,
                falling: req.body.falling,
                energy: req.body.energy,
                poor: req.body.poor,
                bad: req.body.bad,
                concentrating: req.body.concentrating,
                moving: req.body.moving,
                thoughts: req.body.thoughts,
                dateofPHQ9: Date.now(),
                studentId: req.body.studentId,
            })
            .then((dbTestPHQ9) => {
                res.json(dbTestPHQ9);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    /***************  THERAPY SESSIONS API ROUTES ***************/
    // READ ALL
    app.get("/api/therapysession", (req, res) => {
        db.therapySession
            .findAll({})
            .then((dbTherapySessions) => {
                res.json(dbTherapySessions);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });
    // READ ALL by student id
    app.get("/api/therapysession/student/:id", (req, res) => {
        db.therapySession
            .findAll({
                where: {
                    studentId: req.params.id,
                }
            })
            .then((dbTherapySession) => {
                res.json(dbTherapySession);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });
    // READ ALL by counselor id and date
    app.get("/api/therapysession/couselor/:id", (req, res) => {
        db.therapySession
            .findAll({
                where: {
                    counselorId: req.params.id
                }
            })
            .then((dbTherapySession) => {
                res.json(dbTherapySession);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });
    // READ ONE by counselor id and status = "pending"
    app.get("/api/therapysession/counselor/:id/:status", (req, res) => {
        db.therapySession
            .findAll({
                where: {
                    studentId: req.params.id,
                    status: req.params.status,
                },
            })
            .then((dbTherapySession) => {
                res.json(dbTherapySession);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });
    // CREATE a therapy session record
    app.post("/api/therapysession", (req, res) => {
        db.therapySession
            .create({
                subject: req.body.subject,
                studentId: req.body.studentId,
                counselorId: req.body.counselorId,
                dateofSession: Date.now(),
                note: req.body.note,
                status: req.body.status,
            })
            .then((dbNewTherapySession) => {
                res.json(dbNewTherapySession);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });
    // UPDATE a therapy session record by therapy id
    app.post("/api/therapysession/:id", (req, res) => {
        db.therapySession
            .update({
                note: req.body.note,
                status: req.body.status,
                meetinglink: req.body.meetinglink,
                updatedAt: Date.now()
            }, {
                where: {
                    id: req.params.id,
                }
            })
            .then((dbTherapySession) => {
                res.json(dbTherapySession);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });
    // DELETE a therapy session record by therapy id
    app.delete("/api/therapysession/:id", (req, res) => {
        db.therapySession
            .destroy({
                where: {
                    id: req.params.id,
                },
            })
            .then((dbDeletedSession) => {
                res.json(dbDeletedSession);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    /***************  AUTHTENTICATION API ROUTES ***************/
    //LOGIN
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, update the status to true/logged send them to the protected route.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });
    //CREATE STUDENT
    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function(req, res) {
        db.user
            .create({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                admin: false,
                status: false,
                schoolId: req.body.schoolId,
            })
            .then(function() {
                res.redirect(307, "/api/login");
            })
            .catch(function(err) {
                res.status(401).json(err);
            });
    });
    //CREATE COUNSELOR
    //Route to sign up a user with counselor previleges admin === true. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup/admin", function(req, res) {
        db.user
            .create({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                admin: true,
                status: false,
                schoolId: req.body.schoolId,
            })
            .then(function() {
                console.log(`admin user created`);
                res.redirect(307, "/api/login");
            })
            .catch(function(err) {
                res.status(401).json(err);
            });
    });

    //LOGOUT
    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    //READ
    // Route for getting some data about our user to be used in the client side
    app.get("/api/userdata", function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's object stored in express session
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                userId: req.user.id,
                userName: req.user.userName,
                userEmail: req.user.email,
                isUserCounselor: req.user.admin,
                status: req.user.status,
                schoolId: req.user.schoolId,
                scores: req.user.scores,
            });
        }
    });

    /***************  USERS MODEL API ROUTES ***************/
    //READ Get all users
    app.get("/api/user", function(req, res) {
        db.user
            .findAll({})
            .then(function(dbGetUser) {
                res.json(dbGetUser);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    // READ get one user
    app.get("/api/user/:id", (req, res) => {
        db.user
            .findOne({
                where: {
                    id: req.params.id,
                },
            })
            .then((dbUsersById) => {
                res.json(dbUsersById);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });

    // READ all users from a specific school with students privilege
    app.get("/api/user/student/school/:id", (req, res) => {
        db.user
            .findAll({
                where: {
                    schoolId: req.params.id,
                    admin: false,
                },
            })
            .then((dbUsersBySchoolId) => {
                res.json(dbUsersBySchoolId);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });

    // READ all users from a specific school with counselor privilege
    app.get("/api/user/counselor/school/:id", (req, res) => {
        db.user
            .findAll({
                where: {
                    schoolId: req.params.id,
                    admin: true,
                },
            })
            .then((dbUsersBySchoolId) => {
                res.json(dbUsersBySchoolId);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });

    // UPDATE user info by id
    app.post("/api/user/update/:id", (req, res) => {
        db.user
            .update({
                userName: req.body.userName,
                email: req.body.email,
                status: req.body.status,
                schoolId: req.body.schoolId,
                scores: req.body.scores,
            }, {
                where: {
                    id: req.params.id,
                },
            })
            .then((dbUserUpdated) => {
                res.json(dbUserUpdated);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });

    /* UPDATE Scores of students */
    app.post("/api/user/update/student/:studentId/score/:score", (req, res) => {
        db.user
            .update({
                scores: req.params.score,
            }, {
                where: {
                    id: req.params.studentId,
                },
            })
            .then((dbUserStudentScoreUpdated) => {
                res.json(dbUserStudentScoreUpdated);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });

    // DELETE a user by id
    app.delete("/api/user/:id", (req, res) => {
        db.user
            .destroy({
                where: {
                    id: req.params.id,
                },
            })
            .then((dbDeletedUser) => {
                res.json(dbDeletedUser);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });
};