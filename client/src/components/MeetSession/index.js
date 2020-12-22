import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

function MeetSession() {
    //Set State
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [counselors, setCounselors] = useState([]);
    const [meetingsData, setMeetingsData] = useState([]);
    const [subject, setSubject] = useState();
    const [counselor, setCounselor] = useState();

    useEffect(() => {
        //axios request to get the counselors data array
        axios
            .get("/api/user/counselor/school/" + user.schoolId)
            .then((results) => {
                setCounselors(results.data);
            })
            .catch((err) => {
                console.log(err);
            });

        //axios request to get the meetings of the specific user id
        axios
            .get("/api/therapysession/student/" + user.id)
            .then((response) => {
                console.log(response.data);
                setMeetingsData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log(meetingsData);
    //handler functions
    function submitForm() {
        axios
            .post("/api/therapysession", {
                subject: subject,
                studentId: user.id,
                counselorId: counselor,
                dateofSession: Date.now(),
                status: "awaiting",
            })
            .then((response) => {
                console.log(`meeting requested ${response}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    //Render
    return (
        <div className='container' style={{ minHeight: "70vh" }}>
            {/* meeting form */}
            <div
                style={{
                    backgroundColor: "lightgrey",
                    padding: "1%",
                    marginTop: "3%",
                }}>
                <form className='form-inline'>
                    <div className='form-group mb-2'>
                        <div className='form-group mx-sm-3 mb-2'>
                            <input
                                type='text'
                                value={subject}
                                className='form-control'
                                id='subject'
                                placeholder='Short description'
                                onChange={(event) => {
                                    setSubject(event.target.value);
                                }}
                            />
                        </div>
                        <div className='form-group mx-sm-3 mb-2'>
                            <select
                                className='form-control'
                                onChange={(event) => {
                                    console.log(event.target.value);
                                    setCounselor(
                                        parseInt(event.target.value, 10)
                                    );
                                }}>
                                <option value={0}> Choose a couselor </option>
                                {counselors.map((counselor) => {
                                    return (
                                        <option value={counselor.id}>
                                            {counselor.userName}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button
                            className='btn btn-light mb-2'
                            style={{
                                backgroundColor: "#1AB394",
                                color: "white",
                            }}
                            onClick={() => {
                                submitForm();
                            }}>
                            Request Meeting Today
                        </button>
                    </div>
                </form>
            </div>
            {/* Meetings list, here we will see the link when a counselor updates the meeting session*/}
            <div
                style={{
                    backgroundColor: "lightgrey",
                    padding: "1%",
                    marginTop: "3%",
                }}>
                <p>Your requested meetings</p>    
                {meetingsData.length > 0 ? (
                    <ul className='list-group'>
                        {meetingsData.map((meeting) => {
                            return (
                                <li className='list-group-item' style={{display:"inline-block"}}>
                                    <p style={{marginLeft:"10px"}}>Subject: {meeting.subject}</p> 
                                    <p style={{marginLeft:"10px"}}>Status: {meeting.status}</p> 
                                    <p style={{marginLeft:"10px"}}>Link: {meeting.meetinglink}</p>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            No meetings requested for now
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default MeetSession;
