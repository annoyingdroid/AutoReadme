//Variables
const inquirer = require('inquirer');

//Prompt the user questions to populate the README.md
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
        name: 'project',
        message: 'What is the project name?',
        type: 'input'
           
    },
    {
        name: 'username',
        message: 'What is your username?',
        type: 'input'
       
    },
    {
        name: 'description',
        message: 'Give a brief project description.',
        type: 'input'
       
    },
    {
        name: 'installation',
        message: 'How is this application installed/deployed?',
        type: 'input'
       
    },
    {
        name: 'purpose',
        message: 'What is the purpose of this project?',
        type: 'input'
       
    },
    {
        name: 'contributers',
        message: 'Who contributed to this project?',
        type: 'input'
       
    },
    {
        name: 'license',
        message: "How is this project licensed? ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ],
        type: 'list'
       
    },
])
  .then((answers) => {
    `
        <h1 align="center">${answers.project} 👋</h1>
        
        ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
        ## Description
        🔍 ${answers.description}
        ## Table of Contents
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        ## Installation
        💾 ${answers.installation}
        ## Usage
        💻 ${answers.usage}
        ## License
        ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
        <br />
        This application is covered by the ${answers.license} license. 
        ## Contributing
        👪 ${answers.contributing}
        :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
        <br />
        _This README was generated using [AutoReadme](https://github.com/annoyingdroid/AutoReadme)_
    `;
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

//Code for user input

//Template code for readme generation