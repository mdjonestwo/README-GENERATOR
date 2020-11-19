const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Title?',
            name: "title" 
        }
    ])
    .then((response) => {
        fs.writeFile('log.git adtxt', JSON.stringify(response), {}, (e) =>
        console.log(e)
        )
    })