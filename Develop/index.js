// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Enter the contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter project license:',
        choices: licenses
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    

    fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log(fileName + " created!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        var layout = generateMarkdown(answers)
        return layout
    }).then(makeFile => {
        writeToFile("README.md", makeFile);
    })
}

// Function call to initialize app
init();
