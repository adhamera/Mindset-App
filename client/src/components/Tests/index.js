import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as Survey from "survey-react";
import "survey-react/survey.css";

function Tests(){
    
    Survey.StylesManager.applyTheme("modern");

    let jsonTest = {
        pages: [{
            questions: [{
                type: "matrix",
                name: "GAD7",
                title: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
                columns: [{
                    value: 0,
                    text: "Not at all",
                    isRequired: true
                }, {
                    value: 1,
                    text: "Several days",
                    isRequired: true
                }, {
                    value: 2,
                    text: "More than half the days",
                    isRequired: true
                }, {
                    value: 3,
                    text: "Nearly every day",
                    isRequired: true
                }, ],
                rows: [{
                    value: "feeling",
                    text: "Feeling nervous, anxious or on edge?"
                }, {
                    value: "control",
                    text: "Not being able to stop or control worrying?"
                }, {
                    value: "worrying",
                    text: "Worrying too much about different things?"
                }, {
                    value: "trouble",
                    text: "Trouble relaxing?"
                }, {
                    value: "restless",
                    text: "Being so restless that it is hard to sit still?"
                }, {
                    value: "annoyed",
                    text: "Becoming easily annoyed or irritable?"
                }, {
                    value: "afraid",
                    text: "Feeling afraid as if something awful might happen?"
                }, ]
            }, ],
        }, {
            questions: [{
                type: "matrix",
                name: "PHQ9",
                title: "Over the last two weeks, how often have you been bothered by any of the following problems?",
                columns: [{
                    value: 0,
                    text: "Not at all",
                    isRequired: true
                }, {
                    value: 1,
                    text: "Several days",
                    isRequired: true
                }, {
                    value: 2,
                    text: "More than half the days",
                    isRequired: true
                }, {
                    value: 3,
                    text: "Nearly every day",
                    isRequired: true
                }, ],
                rows: [{
                    value: "little",
                    text: "Little interest or pleasure in doing things?"
                }, {
                    value: "down",
                    text: "Feeling down, depressed, or hopeless?"
                }, {
                    value: "falling",
                    text: "Trouble falling or staying asleep, or sleeping too much?"
                }, {
                    value: "energy",
                    text: "Feeling tired or having little energy?"
                }, {
                    value: "poor",
                    text: "Poor appetite or overeating?"
                }, {
                    value: "bad",
                    text: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?"
                }, {
                    value: "concentrating",
                    text: "Trouble concentrating on things, such as reading the newspaper or watching television?"
                }, {
                    value: "moving",
                    text: "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?"
                }, {
                    value: "thoughts",
                    text: "Thoughts that you would be better off dead, or of hurting yourself in some way?"
                }, ]
            }, ]
        }]
    };

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [json, setJson] = useState(jsonTest);
    let history = useHistory();

    function onComplete(survey, options) {
        console.log(user.id);
        //Write survey results into database
        console.log("Survey results: " + JSON.stringify(survey.data));
        //axios request
        axios.post("/api/testgad7", {
            feeling: survey.data.GAD7.feeling,
            control: survey.data.GAD7.control,
            worrying: survey.data.GAD7.worrying,
            trouble: survey.data.GAD7.trouble,
            restless: survey.data.GAD7.restless,
            annoyed: survey.data.GAD7.annoyed,
            afraid: survey.data.GAD7.afraid,
            dateofGAD7: Date.now(),
            studentId: user.id
        }).then((responseGAD7) => {
            console.log(`Test GAD7: ${responseGAD7} saved`);
            axios.post("/api/testphq9",{
                little: survey.data.PHQ9.little,
                down: survey.data.PHQ9.down,
                falling: survey.data.PHQ9.falling,
                energy: survey.data.PHQ9.energy,
                poor: survey.data.PHQ9.poor,
                bad: survey.data.PHQ9.bad,
                concentrating: survey.data.PHQ9.concentrating,
                moving: survey.data.PHQ9.moving,
                thoughts: survey.data.PHQ9.thoughts,
                dateofPHQ9: Date.now(),
                studentId: user.id
            }).then((responsePHQ9)=>{
                console.log(`Test PHQ9: ${responsePHQ9} saved`);
                //Update score +10
                let newScore = user.scores+10;
                console.log(newScore);
                axios.post("/api/user/update/student/"+user.id+"/score/"+newScore)
                .then((res)=>{
                    console.log(res);   
                    //Update the user highlevel reference object from localstorage to the updated user
                    axios.get("/api/user/"+user.id)
                    .then((userResult)=>{
                        localStorage.setItem("user",JSON.stringify(userResult.data));
                        console.log(userResult);            
                        //Redirect
                        history.push("/dashboard");
                    }).catch((err)=>{
                        console.log(err);                                        
                    });
                }).catch((err)=>{
                    throw err;
                });
        }).catch((err)=>{
            throw err;
        });
    });
}
    return ( <div className="container" style={{marginTop:"25px"}} >
        <div className="row">
            <div className="col">
            <Survey.Survey 
                json = { json }
                onComplete = { onComplete }
                showCompletePage = { false }
            />
            </div>
        </div>
    </div> );
}
export default Tests;