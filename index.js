// Import required modules
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { writeSvgToFile } = require('./lib/fileHandler');

// Function to generate a logo based on user input
async function generateLogo() {
  // Prompt the user for input
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

  // Create the appropriate shape object based on user input
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
      // Handle an invalid shape choice
      throw new Error('Invalid shape');
  }

  // Set the color for the chosen shape
  shape.setColor(userInput.shapeColor);

  // Calculate size-related values for the logo
  const shapeSize = Math.min(300, 200); // Assuming the SVG canvas size is 300x200
  const fontSize = userInput.shapeType === 'Triangle' ? 55 : shapeSize / 3;

  // Adjust vertical position for text in Triangle
  const textYPosition = userInput.shapeType === 'Triangle' ? '70%' : '50%';
  

  // Generate SVG content with shape and text
  const svgContent = `
    <svg width="300" height="200">
      ${shape.render()} 
      <text x="50%" y="${textYPosition}" fill="${userInput.textColor}" font-size="${fontSize}" text-anchor="middle" alignment-baseline="middle">${userInput.text}</text>
    </svg>
  `;

  // Specify the filename for the generated SVG file
  const fileName = 'logo.svg';

  // Write the SVG content to a file
  writeSvgToFile(svgContent, fileName);

  // Provide feedback to the user
  console.log(`Generated ${fileName}`);
}

// Call the function to generate the logo
generateLogo();