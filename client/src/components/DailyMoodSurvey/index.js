import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
/* import styles from "./index.css"; */
import axios from "axios";

function DailyMoodSurvey() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [mood, setMood] = useState(0);
    const [needhelp, setNeedhelp] = useState(0);
    let history = useHistory();

    console.log(user);

    return (
        <div className='container' style={{ marginTop: "20px" }}>
            <div className='row h-100'>
                <div className='col'>
                    <h4>Hi {user.userName}! how are you doing today?</h4>
                    <p>
                        Please choose one of the options that match your
                        feelings today, start looking at the options from the
                        left to right
                    </p>
                </div>
            </div>
            <div className='row' style={{ marginTop: "20px" }}>
                {/* Render moods card */}
                <div className='col' style={{ textAlign: "center" }}>
                    <div className='card'>
                        <img
                            id={1}
                            onClick={(event) => {
                                setMood(event.target.id);
                                setNeedhelp(1);
                            }}
                            src='../../../assets/hopeless.png'
                            alt='Hopeless mood'
                            width={50}
                            className='card-img-top'
                            style={{ borderRadius: "90%" }}
                        />
                        <div className='card-body'>
                            <p>Hopeless</p>
                        </div>
                    </div>
                </div>
                <div className='col' style={{ textAlign: "center" }}>
                    <div className='card'>
                        <img
                            id={2}
                            onClick={(event) => {
                                setMood(event.target.id);
                                setNeedhelp(1);
                            }}
                            src='../../../assets/sad.png'
                            alt='Sad mood'
                            width={50}
                            className='card-img-top'
                            style={{ borderRadius: "90%" }}
                        />
                        <div className='card-body'>
                            <p>Sad</p>
                        </div>
                    </div>
                </div>
                <div className='col' style={{ textAlign: "center" }}>
                    <div className='card'>
                        <img
                            id={3}
                            onClick={(event) => {
                                setMood(event.target.id);
                                setNeedhelp(1);
                            }}
                            src='../../../assets/neutral.png'
                            alt='Neutral mood'
                            width={50}
                            className='card-img-top'
                            style={{ borderRadius: "90%" }}
                        />
                        <div className='card-body'>
                            <p>Neutral</p>
                        </div>
                    </div>
                </div>
                <div className='col' style={{ textAlign: "center" }}>
                    <div className='card'>
                        <img
                            id={4}
                            onClick={(event) => {
                                setMood(event.target.id);
                                setNeedhelp(2);
                            }}
                            src='../../../assets/happy.png'
                            alt='Happy mood'
                            width={50}
                            className='card-img-top'
                            style={{ borderRadius: "90%" }}
                        />
                        <div className='card-body'>
                            <p>Happy</p>
                        </div>
                    </div>
                </div>
                <div className='col' style={{ textAlign: "center" }}>
                    <div className='card'>
                        <img
                            id={5}
                            onClick={(event) => {
                                setMood(event.target.id);
                                setNeedhelp(2);
                            }}
                            src='../../../assets/fantastic.png'
                            // src='https://picsum.photos/300/300'
                            alt='Fantastic mood'
                            width={50}
                            className='card-img-top'
                            style={{ borderRadius: "90%" }}
                        />
                        <div className='card-body'>
                            <p>Fantastic</p>
                        </div>
                    </div>
                </div>
            </div>
            <p style={{ marginTop: "20px" }}>
                On a scale of 1 the least - 5 the most your mood today is:{" "}
                {mood}
            </p>
            {/* Have some logic to render a question based on the mood 1-3 Do you want to talk about your feelings today?
                4-5 You are Awesome! something

                After interact with this logic submit this
              */}
            {needhelp === 1 ? (
                <div className='row' style={{ marginTop: "10px" }}>
                    <div className='col'>
                        <p>
                            We feel sorry that you are not feeling well today.
                            Would you like to talk about your feelings with a
                            counselor?
                        </p>
                        <button
                            type='button'
                            className='btn btn-light'
                            style={{
                                marginLeft: "10px",
                                backgroundColor: "#1AB394",
                                color: "white",
                            }}
                            onClick={() => {
                                history.push("/meets");
                            }}>
                            Request a meeting
                        </button>
                    </div>
                </div>
            ) : null}

            {needhelp === 2 ? (
                <div className='row' style={{ marginTop: "10px" }}>
                    <div className='col'>
                        <p>
                            You rock today! Please share your positive energy
                            with your class.
                        </p>
                    </div>
                </div>
            ) : null}
            <div style={{ marginTop: "10px" }}>
                <button
                    className='btn btn-light'
                    type='button'
                    style={{ backgroundColor: "#1AB394", color: "white" }}
                    onClick={(event) => {
                        //Create new daily stat
                        axios
                            .post("/api/dailystat", {
                                dateofSurvey: Date.now(),
                                mood: mood,
                                studentId: user.id,
                            })
                            .then((result) => {
                                //Update scores of user
                                let newScore = user.scores + 5;
                                console.log(newScore);
                                axios
                                    .post(
                                        "/api/user/update/student/" +
                                            user.id +
                                            "/score/" +
                                            newScore
                                    ) //sneding values to update by params
                                    .then((res) => {
                                        console.log(res);
                                        //Update the user highlevel reference object from localstorage to the updated user
                                        axios
                                            .get("/api/user/" + user.id)
                                            .then((userResult) => {
                                                localStorage.setItem(
                                                    "user",
                                                    JSON.stringify(
                                                        userResult.data
                                                    )
                                                );
                                                //Redirect to dashboard
                                                history.push("/dashboard");
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            })
                            .catch((err) => {
                                throw err;
                            });
                    }}>
                    Submit
                </button>
            </div>
            <div style={{ marginTop: "20px" }}></div>
        </div>
    );
}

export default DailyMoodSurvey;
