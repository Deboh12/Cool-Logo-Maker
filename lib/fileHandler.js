const fs = require('fs');

// Function to write SVG content to a file
function writeSvgToFile(svgContent, fileName) {
  fs.writeFileSync(fileName, svgContent);
}

module.exports = { writeSvgToFile };