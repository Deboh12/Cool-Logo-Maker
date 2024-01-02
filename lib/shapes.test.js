const { Triangle, Circle, Square } = require('./shapes');

// Test for the Triangle class's render method
test('Triangle render', () => {
// arrange
  const triangle = new Triangle();
//act
  triangle.setColor('blue');
//assert
  expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

// Test circle render method
test('Circle render', () => {
  const circle = new Circle();
  circle.setColor('red');
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

// Test Square render method
test('Square render', () => {
  const square = new Square();
  square.setColor('green');
  expect(square.render()).toEqual('<rect x="40" y="40" width="220" height="120" fill="green" />');
});