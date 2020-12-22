import React, { useState, useEffect } from "react";
import GoogleChart from "../GoogleChart";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

function Dashboard() {
    const [user, setUser] = useState({});
    const [studentsData, setStudentsData] = useState([]);
    const [meetingsData, setMeetingsData] = useState([]);
    const [meetingLink, setMeetingLink] = useState();

    useEffect(() => {
        //Grabbing the user object from a high level
        const userFormatted = JSON.parse(localStorage.getItem("user"));
        setUser(userFormatted);

        //This request is to retrieve the students of the counselor school
        axios
            .get(
                "/api/user/student/school/" +
                    parseInt(
                        JSON.parse(localStorage.getItem("user")).schoolId,
                        10
                    )
            )
            .then((results) => {
                setStudentsData(results.data);
            })
            .catch((err) => {
                console.log(err);
            });

        //This axios request is retrieving meetings requested to counselor ids */
        axios
            .get(
                "/api/therapysession/couselor/" +
                    parseInt(JSON.parse(localStorage.getItem("user")).id, 10)
            )
            .then((results) => {
                setMeetingsData(results.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log(studentsData);

    function updateMeeting(meetingId) {
        //axios request to post to update the selected meeting
        console.log(meetingId);
        console.log(meetingLink);
        axios
            .post("/api/therapysession/" + meetingId, {
                note: "",
                status: "accepted",
                meetinglink: meetingLink,
                updatedAt: Date.now(),
            })
            .then((response) => {
                alert(`Meeting id: ${meetingId} was updated successfuly!`);
                setMeetingLink("");
            })
            .catch((err) => {
                console.log(err);
            });

        //Clear state of meetlink
        
    }

    return (
        <div className='container' style={{ marginTop: "20px" }}>
            {user.admin === true ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h3>
                                Welcome {user.userName}, today is{" "}
                                {moment(Date.now()).format("MM/DD/YYYY")}
                            </h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <p>See your students: </p>
                            <ul className='list-group'>
                                {studentsData.map((item) => {
                                    return (
                                        <li
                                            className='list-group-item'
                                            id={item.id}
                                            onClick={(event) => {
                                                console.log(event.target.id);
                                            }}
                                            style={{ display: "inline-block" }}>
                                            <p>
                                                ID: {item.id} Name:{" "}
                                                {item.userName} | Scores:{" "}
                                                {item.scores}
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className='col'>
                            <p>Requested meetings</p>
                            <ul className='list-group-item'>
                                {meetingsData.map((item) => {
                                    return (
                                        <li
                                            className='list-group-item'
                                            id={item.id}>
                                            Subject: {item.subject} {" | "}
                                            Requested by student ID:{" "}
                                            {item.studentId}
                                            {" | "} {item.status}
                                            <input
                                                type='text'
                                                id='link'
                                                data-id={item.id}
                                                className='form-control'
                                                placeholder='Enter the meeting link here'
                                                onChange={(event) => {
                                                    console.log(
                                                        event.target.value
                                                    );
                                                    setMeetingLink(
                                                        event.target.value
                                                    );
                                                }}
                                            />
                                            <button
                                                type='button'
                                                id={item.id}
                                                className='btn btn-light'
                                                style={{
                                                    backgroundColor: "#1AB394",
                                                    color: "white",
                                                }}
                                                onClick={(event) => {
                                                    updateMeeting(
                                                        parseInt(
                                                            event.target.id,
                                                            10
                                                        )
                                                    );
                                                }}>
                                                Accept
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h3>{user.userName}'s Dashboard</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <p>Here are your daily mood statistics</p>
                            {/** Here we got to send the data and setings as props*/}
                            <GoogleChart />
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <div className='col'>
                                    <h3>My Scores: {user.scores}</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>
                                            <Link to='/tests'>
                                                Take a Test GAD7 | PHQ9
                                            </Link>
                                        </li>
                                        <li className='list-group-item'>
                                            <Link to='/meets'>
                                                Request a Meeting with a
                                                counselor
                                            </Link>
                                        </li>
                                        <li className='list-group-item'>
                                            <Link to='/guidedmeditation'>
                                                Go to Guided Meditation
                                            </Link>
                                        </li>
                                        <li className='list-group-item'>
                                            <Link to='/dailymoodsurvey'>
                                                Take your daily mood survey
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}></div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
