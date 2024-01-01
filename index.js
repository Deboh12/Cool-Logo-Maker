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
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ]);

  let shape;
  switch (userInput.shape) {
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

  const svgContent = `<svg width="300" height="200">${shape.render()}</svg>`;
  const fileName = 'logo.svg';

  writeSvgToFile(svgContent, fileName);

  console.log(`Generated ${fileName}`);
}

generateLogo();