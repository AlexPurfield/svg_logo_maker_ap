const inquirer = require ("inquirer"); //need inquirer for user input 
const fs = require ("fs"); //will need fs to make svg file 
const { Triangle, Circle, Square } = require("./lib/shapes");
let answers = "";

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

    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("Can only use up to 3 characters");
            questions();
        } else {
            writeToFile("logo.svg", answers);
        }
        }
    );
}

//Need function that will write SVG file using user input from inquirer

function writeToFile(fileName, answers) {
    //start with empty string for input 
    let svgString = "";
    // set the container for logo
    svgString = '<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';
    svgString += `${answers.shape}`;
    //choice of triangle, square, or circle- set the svg html details
let userShape;
if (answers.shape === "Triangle") {
userShape = new Triangle(); //create new triangle object
svgString += `<polygon points = "150, 18 244, 182 56, 182'; fill ="${answers.shapeColor}"/>`; 
console.log (userShape);
} else if (answers.shape === "Square") {
userShape = new Square(); //create new square object if choose square
svgString += `<rect x="10" y="10" width="30" height="30"; fill="${answers.shapeColor}"/> `;
    console.log (userShape);
} else (answers.shape === "Circle" ); {
   let userShape = new Circle (); //create new circle object if don't choose others 
   console.log (userShape);
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`}

      // <text> tag gives rise to text alignment, text-content/text-color taken in from user input and gives default font size of "40"
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> 
  svgString += "</g>";
  // Closing </svg> tag
  svgString += "</svg>";

  // Using file system module to generate svg file, takes in file name given in the promptUser function, the svg string, and a ternary operator which handles logging any errors, or a "Generated logo.svg" message to the console  
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}


questions();