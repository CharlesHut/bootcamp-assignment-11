const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const { generateShapeData } = require('./lib/generateShapeData');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters of text:',
        validate: input => input.length <= 3 || 'Please enter no more than three characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword (or a hexadecimal number) for the text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword (or a hexadecimal number) for the shape color:',
    },
    {
        type: 'input',
        name: 'sideLength',
        message: 'enter a sidelength in pixels',
    },
];

// In your generateShapeData function or where you write to file
function generateShape(responses) {
    const { text, textColor, shape, shapeColor, sideLength } = responses;
    let shapeData = ``

    switch (shape) {
        case 'Circle':
            // Generate SVG for Circle based on radius
            shapeData += `<svg width="100" height="100"  xmlns="http://www.w3.org/2000/svg">
                             <circle cx="50" cy="50" r="25" fill="${shapeColor}" />
                               <text x="40" y="50" fill="${textColor}">${text}</text>
                          </svg>`;
            break;
        case 'Square':
            // Generate SVG for Square based on side length
            shapeData += `<svg width="100" height="100"  xmlns="http://www.w3.org/2000/svg">
                             <rect x="10" y="10" width="${sideLength}" height="${sideLength}" fill="${shapeColor}" />
                              <text x="40" y="50" fill="${textColor}">${text}</text>
                          </svg>`;
            break;
        case 'Triangle':
            // Generate SVG for Triangle based on side length
            const height = (Math.sqrt(3) / 2) * sideLength; // Height of an equilateral triangle
            shapeData += `<svg width="${sideLength + 20}" height="${height + 20}" xmlns="http://www.w3.org/2000/svg">
                             <polygon points="${sideLength / 2},10 ${sideLength},${height + 10} 10,${height + 10}" fill="${shapeColor}" />
                              <text x="40" y="50" fill="${textColor}">${text}</text>
                          </svg>`;
            break;
        default:
            shapeData += 'Invalid shape';
    }

    return shapeData;
}


function writeToFile(fileName, data) {
    // Write to shape.txt as before
    fs.writeFileSync(path.join(process.cwd(), fileName), data);

    // Write to shape.svg for SVG content
    if (fileName.endsWith('.txt')) {
        const svgContent = data; // Ensure data contains SVG content
        fs.writeFileSync(path.join(process.cwd(), 'shape.svg'), svgContent);
    }
}


// Function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const shapeData = generateShape(responses);
        fs.writeFileSync('./shape.svg', shapeData);
        console.log('Successfully created shape.txt');
    });
}

// Function call to initialize app
init();
