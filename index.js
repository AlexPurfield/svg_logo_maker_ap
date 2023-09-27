const inquirer = require ("inquirer"); //need inquirer for user input 
const fs = require ("fs"); //will need fs to make svg file 
const { Triangle, Circle, Square } = require("./lib/shapes");
const answers=""


const fileName = './examples/logo.svg';

//questions for user input
const questions = () => {
    return inquirer
    .prompt([
        {
            type: "list",
            message: "What shape would you like your logo to be?",
            name: "shape",
            choices:["Triangle", "Circle", "Square"] 
        },
        {
            type: "input",
            message: "What color would you like your shape?",
            name: "shapeColor",
            
        },
        {
            type: "input",
            message: "What color would you like your text?",
            name: "textColor",
            
        },
        {
            type: "input",
            message: "Which three text characters would you like on your logo?",
            name: "text",
            
        },

    ])

    .then(answers) 
    
};

//Need function that will get the shape the user chooses

function makeShape(answers) {
    if (questions.shape==='Circle') {
        let userShape = new Circle (answers.shapeColor, answers.text, answers.textColor)
        return userShape.render()
    }
    if (questions.shape==='Square') {
        let userShape = new Square (answers.shapeColor, answers.text, answers.textColor)
        return userShape.render()
    }
    if (questions.shape ==='Triangle') {
        let userShape = new Triangle (answers.shapeColor, answers.text, answers.textColor)
        return userShape.render()
    }
    // return makeLogo;
};

// need function to create the svg file with fs 

function makeLogo(answers) {
    const svg =makeShape(answers);
    fs.writeFile(fileName, JSON.stringify(svg), (err)=> {
        if (err) {
            console.log(err);
        } else {
            console.log("svg file created");
        }
    });
}
      


questions();
makeLogo();
