const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { writeSvgToFile } = require('./lib/fileHandler');

async function generateLogo() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ]);

  let shape;
  switch (userInput.shapeType) {
    case 'Circle':
      shape = new Circle();
      break;
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Square':
      shape = new Square();
      break;
    default:
      throw new Error('Invalid shape');
  }

  shape.setColor(userInput.shapeColor);

  // Calculate an appropriate font size based on the shape dimensions
  const shapeSize = Math.min(300, 200); // Assuming the SVG canvas size is 300x200
  const fontSize = shapeSize / 3;

  const svgContent = `
    <svg width="300" height="200">
      ${shape.render()}
      <text x="50%" y="50%" fill="${userInput.textColor}" font-size="${fontSize}" text-anchor="middle" alignment-baseline="middle">${userInput.text}</text>
    </svg>
  `;

  const fileName = 'logo.svg';
  writeSvgToFile(svgContent, fileName);

  console.log(`Generated ${fileName}`);
}

generateLogo();
