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



initialQuestion().then((answers) => {
    console.log(answers);
    console.log(answers.position)
    if (answers.position === "Manager") {
        console.log("manager logged");
    } else if 
        (answers.position === "Engineer") {
            console.log("Engineer picked");
        } else {
        console.log("last resort is intern");
    }
})
