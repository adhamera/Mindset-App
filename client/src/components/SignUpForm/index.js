import React, { Component } from "react";

//CSS Styling for this component

// const h1 = {
//     color: "White",
//     fontSize: "25px",
//     textAlign: "center",
// }

// const bottomText = {
//     color: "white",
// } 

class signup extends Component {
    //Define State

    //Handle functions

    render() {
        return (
            <div class="col">
                <div class="row justify-content-center">
                    <div class="jumbotron shadow mt-4">
                        <div class="container-fluid">
                            <img src="./mindsetlogo.png" height="130"></img>
                            <h1> Welcome Back!</h1>
                            <form class="signup">
                                <div class="col-md-12 m-auto">
                                    <div class="form-group">
                                        <input type="email" class="email rounded-pill p-1 border" id="email-input" aria-describedby="emailHelp" placeholder="Enter your email">
                                        </input>
                                        <div class="form-group">
                                            <input type="password" class="password rounded-pill p-1 border" id="password-input" placeholder="Password, please!">
                                            </input>
                                            <div class="txtb">
                                                <input type="submit" class="logbtn" value="Login">
                                                </input>
                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default signup;