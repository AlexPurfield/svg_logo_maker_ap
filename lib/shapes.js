class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor= shapeColor;
        this.text=text;
        this.textColor= textColor;
    }
}

class Circle extends Shape {
    constructor (shapeColor, text, textColor) {
        super (shapeColor, text, textColor);
    }
    createCircle() {
        console.log("create circle");
    }
}

class Square extends Shape {
    constructor (shapeColor, text, textColor) {
        super (shapeColor, text, textColor);
    }
}

class Triangle extends Shape {
    constructor (shapeColor, text, textColor) {
        super (shapeColor, text, textColor);
    }
}

module.exports = { Circle, Square, Triangle };



