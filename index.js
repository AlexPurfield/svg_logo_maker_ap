const inquirer = require ("inquirer"); //need inquirer for user input 
const fs = require ("fs"); //will need fs to make svg file 

//questions for user input
const questions = () => {
    return inquirer
    .prompt([
        {
            type: "rawlist",
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


    
};
module.exports = questions;
questions();

//Need function that will write SVG file using user input from inquirer

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = '<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';
    svgString += `${answers.shape}`;
};