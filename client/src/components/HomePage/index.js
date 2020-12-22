import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../LoginForm";
import axios from "axios";
import "./index.css";
// -> Add this later /* import Background from './background.jpg'; */

function HomePage() {
    //Define state
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let history = useHistory();
    //Styling of container
    let backgroundStyle = {
        /* backgroundImage: `url(${Background})`, */
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
    };

    //HandleFunctions
    //Submit the form to axios API post request
    const handleLoginFormSubmit = (event) => {
        event.preventDefault();

        axios
            .post("/api/login", {
                userName: username,
                password: password,
            })
            .then((result) => {
                //passing user logged in to dashboard by storing user object in a high context level (LocalStorage)
                localStorage.setItem("user", JSON.stringify(result.data));
                if (!result.data.admin) {
                    history.push("/dailymoodsurvey");
                }
                if (result.data.admin) {
                    history.push("/dashboard");
                }
            })
            .catch((err) => {
                throw err;
            });
    };

    //Render
    return (
        <div
            className='container'
            style={(backgroundStyle, { minHeight: "75vh" })}>
            <LoginForm
                username={username}
                password={password}
                handleLoginFormSubmit={handleLoginFormSubmit}
                handleInputChangeUsername={(event) => {
                    setUsername(event.target.value);
                }}
                handleInputChangePassword={(event) => {
                    setPassword(event.target.value);
                }}
            />
            <div style={{ marginTop: "20px" }}></div>
        </div>
    );
}

export default HomePage;
