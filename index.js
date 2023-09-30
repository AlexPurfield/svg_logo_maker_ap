const inquirer = require ("inquirer"); //need inquirer for user input 
const fs = require ("fs"); //will need fs to make svg file 
const { Triangle, Circle, Square } = require("./lib/shapes");
const answers = "";
const colors = ['aliceblue', 'antiquewhite', 'aqua', 'aquaMarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];




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
            message: "What color would you like your shape? Choose a color keyword or hexadecimal.",
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

      

//call questions
questions();
