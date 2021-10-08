const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");


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
    ])   
}


initialQuestion().then((answers) => {
    console.log(answers);
    console.log(answers.position)
    if (answers.position === "Manager") {
        console.log("manager logged");
        managerQuestions().then((answers)=> {
            console.log(answers)
        })
        
    } else if 
        (answers.position === "Engineer") {
            console.log("Engineer picked");
            engineerQuestions().then((answers) => {
                console.log(answers)
            })
        } else {
        console.log("last resort is intern");
        internQuestions().then((answers) => {
            console.log(answers)
    })
}})
