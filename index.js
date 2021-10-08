const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const employeeArray = [];

// Prompt questions
function initialQuestion() {
    return inquirer.prompt([
        {
            type: "input",
            name: "team name",
            message: "Enter your team's name: ",
        },

        {
            type: "list",
            name: "position",
            message: "Select your position ",
            choices: ["Manager","Engineer","Intern"]
        },

    ])

}


function managerQuestions() {
    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "Enter your name: ",
        },

        {
            type: "input",
            name: "id",
            message: "Enter your ID here: ",

        },
        {
            type: "input",
            name: "email",
            message: "Enter your email: ",
        },

        {
            type: "input",
            name: "officeNumber",
            message: "Enter your office number:  ",

        },

        {
            type: "confirm",
            name: "another",
            message: "Would you like to add another Employee? ",
        },
    ])     
}

function engineerQuestions () {
    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "Enter your name: ",
        },

        {
            type: "input",
            name: "id",
            message: "Enter your ID here: ",

        },
        {
            type: "input",
            name: "email",
            message: "Enter your email: ",
        },

        {
            type: "input",
            name: "github",
            message: "Enter your github:  ",

        },

        {
            type: "confirm",
            name: "another",
            message: "Would you like to add another Employee? ",
        },
    ])   
}

function internQuestions () {
    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "Enter your name: ",
        },

        {
            type: "input",
            name: "id",
            message: "Enter your ID here: ",

        },
        {
            type: "input",
            name: "email",
            message: "Enter your email: ",
        },

        {
            type: "input",
            name: "highschool",
            message: "Enter your highschool:  ",
        },

        {
            type: "confirm",
            name: "another",
            message: "Would you like to add another Employee? ",
        },
    ])   
}

function addMore(answers) {
    for (let i = 0; i < 1; i++) {
    if (answers.another === true) {
        // console.log ("add another one")
        // console.log(answers.another)

        fullQuestions();
    } else {
        console.log("function to render will go here")
    }}
}

// calls questions then askes position specific questions
function fullQuestions() {

    initialQuestion().then((answers) => {
    // console.log(answers);
    // console.log(answers.position)

    if (answers.position === "Manager") {
        console.log("manager logged");
        managerQuestions().then((answers)=> {
            if (answers.another === true) {
                addMore(answers);
            } else {
                console.log("function to render will go here")
            }
        })
        
    } else if 
        (answers.position === "Engineer") {
            console.log("Engineer picked");
            engineerQuestions().then((answers) => {
                console.log(answers)
                if (answers.another === true) {
                    console.log ("add another one")
    
                } else {
                    console.log("function to render will go here")
                }
            })
        } else {
        console.log("last is intern");
        internQuestions().then((answers) => {
            // console.log(answers.highschool)
            if (answers.another === true) {
                console.log ("add another one")

            } else {
                console.log("function to render will go here")
            }
    })
}})} 

fullQuestions();


const saveEmployee = (answers) => {
    employeeArray.push
}