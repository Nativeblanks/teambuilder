const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
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