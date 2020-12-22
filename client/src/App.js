import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Tests from "./components/Tests";
import DailyMoodSurvey from "./components/DailyMoodSurvey";
import Dashboard from "./components/Dashboard";
import Anxiety from "./components/AnxietyMeditation";
import Attention from "./components/FocusMeditation";
import Morning from "./components/GoodMorningMeditation";
import LettingGo from "./components/LettingGoMeditation";
import Restful from "./components/RestfulSleepMeditation";
import Calm from "./components/CalmMeditation";
import GuidedMeditations from "./components/GuidedMeditations";
import Footer from "./components/Footer";
import MeetSession from "./components/MeetSession";

function App() {
    return (
        <Router>
            <div style={{ backgroundColor: "white" }}>
                <NavBar />
                {/* // !login ? (route) */}
                <Route exact path='/' component={HomePage} />
                <Route exact path='/tests' component={Tests} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route
                    exact
                    path='/dailymoodsurvey'
                    component={DailyMoodSurvey}
                />
                <Route
                    exact
                    path='/guidedmeditation'
                    component={GuidedMeditations}
                />
                <Route
                    exact
                    path='/guidedmeditation/anxiety'
                    component={Anxiety}
                />
                <Route exact path='/guidedmeditation/calm' component={Calm} />
                <Route
                    exact
                    path='/guidedmeditation/sleep'
                    component={Restful}
                />
                <Route
                    exact
                    path='/guidedmeditation/focus'
                    component={Attention}
                />
                <Route
                    exact
                    path='/guidedmeditation/morning'
                    component={Morning}
                />
                <Route
                    exact
                    path='/guidedmeditation/letgo'
                    component={LettingGo}
                />
                <Route exact path='/meets' component={MeetSession} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
