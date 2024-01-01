const fs = require('fs');

function writeSvgToFile(svgContent, fileName) {
  fs.writeFileSync(fileName, svgContent);
}

module.exports = { writeSvgToFile };