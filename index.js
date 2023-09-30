const inquirer = require ("inquirer"); //need inquirer for user input 
const fs = require ("fs"); //will need fs to make svg file 
const { Triangle, Circle, Square } = require("./lib/shapes");
const answers = "";
const colors = ['red', 'blue', ' yellow' , 'green', 'pink', 'orange'];


const fileName = './examples/logo.svg';

//questions for user input
function questions () {
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

    .then((answers) =>{
     
       
        makeLogo(answers);
    } )
    


//Need function that will get the shape the user chooses

function makeShape(questions) { 
    // const shape = (answers.shape);
    if (questions.shape==='Circle') {
        let userShape = new Circle (questions.shapeColor, questions.text, questions.textColor)
        return userShape.render()
    }
    if (questions.shape==='Square') {
        let userShape = new Square (questions.shapeColor, questions.text, questions.textColor)
        return userShape.render()
    }
    if (questions.shape ==='Triangle') {
        let userShape = new Triangle (questions.shapeColor, questions.text, questions.textColor)
        return userShape.render()
    }
     
};

// need function to create the svg file with fs 

function makeLogo(answers) {
    const svg =makeShape(answers);
    fs.writeFile("logo.svg",(svg), () =>
            console.log("svg file created"));
        }
    };

      


questions();
