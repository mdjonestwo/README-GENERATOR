const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Title',
            name: "title" 
        },
        {
            type: 'input',
            message: 'Description',
            name: "description" 
        },
        {
            type: 'input',
            message: 'Installation Instructions',
            name: "install" 
        },
        {
            type: 'input',
            message: 'Usage Information?',
            name: "usage" 
        },    
        {
            type: 'input',
            message: 'Contribution Guidelines',
            name: "guidelines" 
        },
        {
            type: 'input',
            message: 'Test Instructions',
            name: "test" 
        },    
        {
            type: 'list',
            message: 'License',
            name: "license", 
            choices: ['MIT', 'YOU', "LUV"]
        },
        {
            type: 'input',
            message: 'GitHub Username',
            name: "github",     
        },
        {
            type: 'input',
            message: 'Email',
            name: "email", 
        }
    ])
    .then((response) => {
        const filename = `${response.title.toLowerCase().split(' ').join("-")}.md`
        function Data(title, description, install, usage, guidelines, test, license){
            this.title = title
            this.description = description
            this.install = install
            this.usage = usage
            this.guidelines = guidelines
            this.test = test
            this.license = license
            this.getDetails = function () {
                return "## TITLE" + this.title;
            }
        }
        const newData = new Data(response.title)
       

        const foo =
        `## TITLE
        ${response.title}
        ## DESCRIPTION 
        ${response.description}
        ## INSTALLATION INSTRUCTIONS 
        ${response.install}
        ## USAGE INFORMATION 
        ${response.usage}
        ## CONTRIBUTION GUIDELINES 
        ${response.guidelines}
        ## TEST INSTRUCTIONS
        ${response.test}
        ## LICENSE
        ${response.license}`
        
        fs.writeFile(filename, foo, {}, (e) =>
        console.log(e)
        )
    })