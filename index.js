// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "desc",
      },
      {
        type: "input",
        message: questions[2],
        name: "contents",
      },
      {
        type: "input",
        message: questions[3],
        name: "install",
      },
      {
        type: "input",
        message: questions[4],
        name: "usage",
      },
      {
        type: "input",
        message: questions[5],
        name: "credits",
      },
      {
        type: "input",
        message: questions[6],
        name: "license",
      },
      {
        type: "input",
        message: questions[7],
        name: "badges",
      },
      {
        type: "input",
        message: questions[8],
        name: "features",
      },
      {
        type: "input",
        message: questions[9],
        name: "contribute",
      },
      {
        type: "input",
        message: questions[10],
        name: "tests",
      },
    ])
    .then((response) => {
      // answers.push(response.title);
      // answers.push(response.desc);
      // answers.push(response.contents);
      // answers.push(response.install);
      // answers.push(response.usage);
      // answers.push(response.credits);
      // answers.push(response.license);
      // answers.push(response.badges);
      // answers.push(response.features);
      // answers.push(response.contribute);
      // answers.push(response.tests);
      // console.log(answers);
      return response;
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("ReadMe generated!")
  );
}

// TODO: Create a function to initialize app
function init() {
  // fetchUserInput();
  writeToFile("test.md", fetchUserInput());
}

// Function call to initialize app
init();
