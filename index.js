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
      writeToFile("test.md", generateMarkdown(response));
    });
}

function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("ReadMe generated!")
  );
}

function init() {
  fetchUserInput();
}

init();
