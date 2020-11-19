const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of this project?',
            name: "title" 
        },
        {
            type: 'input',
            message: 'How would you describe this project?',
            name: "description" 
        },
        {
            type: 'input',
            message: 'How does one install this project?',
            name: "install" 
        },
        {
            type: 'input',
            message: 'How can this project be used?',
            name: "usage" 
        },    
        {
            type: 'input',
            message: 'What are the guidelines to making a contribution?',
            name: "guidelines" 
        },
        {
            type: 'input',
            message: 'What are the test instructions? ',
            name: "test" 
        },    
        {
            type: 'list',
            message: 'What is the project licensed under?',
            name: "license", 
            choices: ['MIT', 'WTFPL', "ISC", "N/A"]
        },
        {
            type: 'input',
            message: 'What is your GitHub Username?',
            name: "github",     
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: "email", 
        }
    ])
    .then((response) => {
        const filename = `${response.title.toLowerCase().split(' ').join("-")}.md`
        const foo =
    
`## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#Test)
* [License](#license)
* [Questions](#questions)
        
## TITLE
${response.title}

## DESCRIPTION 
${response.description}

## INSTALLATION INSTRUCTIONS 
${response.install}

## USAGE INFORMATION 
${response.usage}

## CONTRIBUTION
${response.guidelines}

## TEST
${response.test}

## LICENSE
[![License: ${response.license}](https://img.shields.io/badge/License-${response.license}-yellow.svg)](https://opensource.org/licenses/${response.license})

## QUESTIONS
Contact me 
Github: (https://github.com/${response.github})
Email: ${response.email}`
        
        fs.writeFile(filename, foo, {}, (e) =>
        console.log(e)
        )
    })