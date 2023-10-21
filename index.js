// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Description",
  "Would you like a table of contents?",
  "Installation",
  "Usage",
  "Credits",
  "License",
  "Badges",
  "Features",
  "How to Contribute",
  "Tests",
];

function handleUserInput() {
  let answers = [];
  for (const question of questions) {
    inquirer
      .prompt({
        type: "input",
        message: question,
        name: "answer",
      })
      .then((response) => {
        answers.push(response.answer);
      });
  }
  console.log(answers);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  handleUserInput();
}

// Function call to initialize app
init();
