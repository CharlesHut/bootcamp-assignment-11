const { Shape, Circle, Square, Triangle } = require('./shapes');

describe('Shape Classes', () => {
    describe('Shape', () => {
        it('should generate correct data for a Shape', () => {
            const shape = new Shape('ABC', 'red', '#FF0000');
            const data = shape.generateShapeData();
            expect(data).toBe('Text: ABC\nText Color: red\nShape Color: #FF0000');
        });
    });

    describe('Circle', () => {
        it('should generate correct data for a Circle', () => {
            const circle = new Circle('ABC', 'red', '#FF0000', 10);
            const data = circle.generateShapeData();
            expect(data).toBe('Text: ABC\nText Color: red\nShape Color: #FF0000\nShape: Circle\nRadius: 10');
        });
    });

    describe('Square', () => {
        it('should generate correct data for a Square', () => {
            const square = new Square('XYZ', 'blue', '#0000FF', 20);
            const data = square.generateShapeData();
            expect(data).toBe('Text: XYZ\nText Color: blue\nShape Color: #0000FF\nShape: Square\nSide Length: 20');
        });
    });

    describe('Triangle', () => {
        it('should generate correct data for a Triangle', () => {
            const triangle = new Triangle('123', 'green', '#00FF00', 30);
            const data = triangle.generateShapeData();
            expect(data).toBe('Text: 123\nText Color: green\nShape Color: #00FF00\nShape: Triangle\nSide Length: 30');
        });
    });
});
