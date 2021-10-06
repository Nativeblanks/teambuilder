const inquirer = require("inquirer");
const fs = require("fs");

// Prompt questions
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name: ",
        },

        {
            type: "list",
            name: "position",
            message: "Select your position ",
            choices: ["Manager","Engineer","Employee","Intern"]
        },


    ])

}

promptUser();