import inquirer from 'inquirer';
import fs from 'fs';
import markdown from 'markdown-js';

main();

function main() {
    writeReadme();
}

function writeReadme() {
inquirer.
    prompt([
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
            name: 'testing',
            message: 'Give a brief test procedure.',
            type: 'input'
        
        },
        {
            name: 'purpose',
            message: 'What is the purpose of this project?',
            type: 'input'
        
        },
        {
            name: 'contributors',
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
                "Open"],
            type: 'list'
        }
    ])
    //Template code for readme generation
    .then((answers) => {
        var output = `
# ${answers.project}

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Testing](#testing)
* [Purpose](#purpose)
* [License](#license)
* [Contributing](#contributors)

## Description
🔍 ${answers.description}

## Installation
💾 ${answers.installation}

## Purpose
💻 ${answers.purpose}

## Testing
🧪 ${answers.testing}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

This application is covered by the ${answers.license} license. 
## Contributers
👪 ${answers.contributors}
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

This README was generated using [AutoReadme](https://github.com/annoyingdroid/AutoReadme)
        `

        fs.writeFileSync('./README.md', output);
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error);
        } else {
        // Something else went wrong
        console.log(error);
        }
    });
}