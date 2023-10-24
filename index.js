const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  "Title:",
  "Description: ",
  "Installation: ",
  "Usage: ",
  "Credits: ",
  "License: ",
  "Badges: ",
  "Features: ",
  "How to Contribute: ",
  "Tests: ",
];

function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("ReadMe generated!")
  );
}

function init() {
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
        name: "install",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "input",
        message: questions[4],
        name: "credits",
      },
      {
        type: "list",
        pageSize: 16,
        message: questions[5],
        name: "license",
        choices: [
          "Apache 2.0",
          "GNU General Public v3.0",
          "MIT",
          "BSD 2-Clause",
          "BSD 3-Clause",
          "Boost Software 1.0",
          "Creative Commons Zero v1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero v3.0",
          "GNU General Public v2.0",
          "GNU Lesser General Public v2.1",
          "Mozilla Public 2.0",
          "The Unlicense",
          "None",
        ],
      },
      {
        type: "input",
        message: questions[6],
        name: "badges",
      },
      {
        type: "input",
        message: questions[7],
        name: "features",
      },
      {
        type: "input",
        message: questions[8],
        name: "contribute",
      },
      {
        type: "input",
        message: questions[9],
        name: "tests",
      },
    ])
    .then((response) => {
      writeToFile("yourREADME.md", generateMarkdown(response));
    });
}

init();
