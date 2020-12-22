# Mindset
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contents
* [Overview](#Overview)
* [License](#License)
* [Contributing](#Contributing)
* [Database Structure](#Database_Structure)
* [Privilege](#Privilege)
* [Demo](#Demo)
* [Questions](#Questions)
* [Go to live app](https://frozen-cliffs-96798.herokuapp.com)

## Overview
This is an application designed to help teenagers with their mental health. Features include connecting with a counselor to set up a Zoom meeting, testing for anxiety and depression using the GAD-7 and PHQ-9, guided meditation links and a mood survey. This app was made using Mongo, Express, React, NodeJS, MySQL, Axios, Bootstrap, a react audio player, survey-react and custom CSS stylings.

## License
This app is using the **MIT** license. For more information about the **MIT** license terms of use [*Licence*](https://opensource.org/licenses/MIT)

## Contributing
Jorge Calderon, Isabell Danell, Anusha Dhamera, Lierin Hanuman, James Jorissen and Foos Mahamud were the initial contributors to this project. Please feel free to add contributions that may be beneficial to this open-source project.

## Database_Structure
Before to start contributing take a moment to analyze the app database structure:
![Database Relationships](/Untitled Diagram.png)
[Link to open diagram online](https://dbdiagram.io/d/5fcec76d9a6c525a03ba2c8f)

## Privilege
The app allows two types of users to interact with the login, and each type of user is able to access specific functions. The two users are the counselor/admin and the student.
- Counselor/Admin
- Student

The Admin may access student: 
- test scores
- point totals
- charts
- meeting requests

The student users have acceess to:
- a daily mood survey
- GAD-7 and PHQ-9 tests
- guided meditations
- charts
- 

## Users

By default we have two users set up for this project. one with admin/counselor privileges and one student user. Please see the user details below:

```
Counselor Admin user:
{ 
    userName: "nate",
    password: "1234"
}
Student Regular User:

{ 
    userName: "lierin",
    password: "1234"
}
```
Once you run the app you can create new student users by following the sign-up links on the page.



## Questions
Any further questions about this project can be emailed directly to <jlcalderonfuentes@gmail.com>, <jamesjorissen@gmail.com>, . Feel free to reach out and follow me on [Github](https://github.com/jlcalderon)
