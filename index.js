import inquirer from 'inquirer';
import fs from 'fs';

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
                "Open"],
            type: 'list'
        }
    ])
    //Template code for readme generation
    .then((answers) => {
        var output = `
            # ${answers.project}
            
            ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
            ## Table of Contents
            - [Description](#description)
            - [Installation](#installation)
            - [Purpose](#purpose)
            - [License](#license)
            - [Contributing](#contributers)
            ## Description
            🔍 ${answers.description}
            ## Installation
            💾 ${answers.installation}
            ## Purpose
            💻 ${answers.purpose}
            ## License
            ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
            <br />
            This application is covered by the ${answers.license} license. 
            ## Contributers
            👪 ${answers.contributers}
            :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
            <br />
            _This README was generated using [AutoReadme](https://github.com/annoyingdroid/AutoReadme)_
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