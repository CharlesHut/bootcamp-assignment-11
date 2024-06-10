class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    generateShapeData() {
        return `Text: ${this.text}\nText Color: ${this.textColor}\nShape Color: ${this.shapeColor}`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor, radius) {
        super(text, textColor, shapeColor);
        this.radius = radius;
    }

    generateShapeData() {
        return `${super.generateShapeData()}\nShape: Circle\nRadius: ${this.radius}`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor, sideLength) {
        super(text, textColor, shapeColor);
        this.sideLength = sideLength;
    }

    generateShapeData() {
        return `${super.generateShapeData()}\nShape: Square\nSide Length: ${this.sideLength}`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor, sideLength) {
        super(text, textColor, shapeColor);
        this.sideLength = sideLength;
    }

    generateShapeData() {
        return `${super.generateShapeData()}\nShape: Triangle\nSide Length: ${this.sideLength}`;
    }
}

module.exports = { Shape, Circle, Square, Triangle };
