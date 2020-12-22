import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import soundFocus from "./03_Focus_Pt_1_(Voice_Only).mp3";
import Focus from "./Focus.png";
import axios from "axios";

function Attention() {
    //Define state
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userScores, setUserScores] = useState(0);

    useEffect(() => {
        //Grabbing the user logged scores and parsing it to integer
        //when the component mount
        setUserScores(parseInt(user.scores, 10));
        //Making sure the user get updated to the high level object
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    function onComplete() {
        //Upgrade scores +5
        let newScore = userScores + 5;
        //Printing new score in console
        console.log(newScore);

        //Making axios post req to update the user scores
        axios
            .post("/api/user/update/student/" + user.id + "/score/" + newScore)
            .then(() => {
                //Update the user highlevel reference object from localstorage to the updated user
                axios
                    .get("/api/user/" + user.id)
                    .then((userResult) => {
                        localStorage.setItem(
                            "user",
                            JSON.stringify(userResult.data)
                        );
                        //Display something alert UI
                        alert(
                            "Congratulation you have completed this meditation +5"
                        );
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <div className='container' style={{ padding: "15px" }}>
                <div className='row h-100' style={{ marginTop: "5%" }}>
                    <div className='col-md-4 offset-md-4 my-auto'>
                        <div className='card'>
                            <img
                                src={Focus}
                                alt='Mindset'
                                width={70}
                                className='card-img-top'
                                style={{ borderRadius: "90%" }}
                            />
                            <div className='card-body'>
                                <ReactAudioPlayer
                                    src={soundFocus}
                                    controls
                                    onEnded={() => {
                                        onComplete();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Attention;
