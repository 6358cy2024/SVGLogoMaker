const fs = require('fs');
const { default: inquirer } = require("inquirer");
const shapes = require('./lib/shapes');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape will you use?',
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color do you want? Black will not work',
    },
    {
        type: 'input',
        name: 'text', 
        message: 'What do you want to write on your logo?'
    }
]


function writeToFile(data) {
    fs.writeFile('logo.svg', data, (error) => {//use the input data to insert values.
        if (error) {
            return console.log(error);
        } else {
            console.log('File successfully made.');
        }
    })
};



function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(shapes(data));//sends information to GenerateMarkdown file
        })
}
init();