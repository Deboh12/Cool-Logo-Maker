// Define a base Shape class with common properties and methods
class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    // Abstract method to be implemented by subclasses
    render() {
      throw new Error('render() method must be implemented');
    }
  }
  
  // Triangle Subclass
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
  }
  
  // Circle Subclass
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  // Square Subclass
  class Square extends Shape {
    render() {
      return `<rect x="40" y="40" width="220" height="120" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };