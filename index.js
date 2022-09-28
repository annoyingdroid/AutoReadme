//Variables
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
//Code for user input
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
       
    }
])
//Template code for readme generation
  .then((answers) => {
    fs.writeFile('README.md',
    `
        # ${answers.project}
        
        ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
        ## Table of Contents
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        ## Description
        🔍 ${answers.description}
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
    `)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });