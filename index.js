// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  "Title:",
  "Description: ",
  "Table of Contents: ",
  "Installation: ",
  "Usage: ",
  "Credits: ",
  "License: ",
  "Badges: ",
  "Features: ",
  "How to Contribute: ",
  "Tests: ",
];

function fetchUserInput() {
  let answers = [];
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "titleAnswer",
      },
      {
        type: "input",
        message: questions[1],
        name: "descrAnswer",
      },
      {
        type: "input",
        message: questions[2],
        name: "tableOfContentsAnswer",
      },
      {
        type: "input",
        message: questions[3],
        name: "installAnswer",
      },
      {
        type: "input",
        message: questions[4],
        name: "usageAnswer",
      },
      {
        type: "input",
        message: questions[5],
        name: "creditsAnswer",
      },
      {
        type: "input",
        message: questions[6],
        name: "licenseAnswer",
      },
      {
        type: "input",
        message: questions[7],
        name: "badgesAnswer",
      },
      {
        type: "input",
        message: questions[8],
        name: "featuresAnswer",
      },
      {
        type: "input",
        message: questions[9],
        name: "contributeAnswer",
      },
      {
        type: "input",
        message: questions[10],
        name: "testsAnswer",
      },
    ])
    .then((response) => {
      answers.push(response.titleAnswer);
      answers.push(response.descrAnswer);
      answers.push(response.tableOfContentsAnswer);
      answers.push(response.intallAnswer);
      answers.push(response.usageAnswer);
      answers.push(response.creditsAnswer);
      answers.push(response.licenseAnswer);
      answers.push(response.badgesAnswer);
      answers.push(response.featuresAnswer);
      answers.push(response.contributeAnswer);
      answers.push(response.testsAnswer);
    });
  console.log(answers);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  fetchUserInput();
}

// Function call to initialize app
init();
