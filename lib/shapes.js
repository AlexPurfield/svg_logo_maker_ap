class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor= shapeColor;
        this.text=text;
        this.textColor= textColor;
    }
};

class Circle extends Shape {
    constructor (shapeColor, text, textColor) {
        super (shapeColor, text, textColor);
        return `<circle cx="150" cy="115" r="80" fill="${this.shapeColor}"/>`

    }
};

class Square extends Shape {
    constructor (shapeColor, text, textColor) {
        super (shapeColor, text, textColor);
        return `<rect x="10" y="10" width="30" height="30"; fill="${this.shapeColor}"/> `;

    }
};

class Triangle extends Shape {
    constructor (shapeColor, text, textColor) {
        super (shapeColor, text, textColor);
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;

    }
};




module.exports= Circle;
module.exports=Square;
module.exports=Triangle;