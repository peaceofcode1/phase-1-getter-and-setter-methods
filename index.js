class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter
    set diameter(newDiameter) {
      this.radius = newDiameter / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Setter for circumference
    set circumference(newCircumference) {
      this.radius = newCircumference / (2 * Math.PI);
    }
  
    // Getter for area
    get area() {
      return Math.PI * this.radius ** 2;
    }
  
    // Setter for area
    set area(newArea) {
      this.radius = Math.sqrt(newArea / Math.PI);
    }
  }
  
  // Example usage:
  const myCircle = new Circle(5);
  console.log(myCircle.diameter); // Output: 10
  console.log(myCircle.circumference); // Output: 31.41592653589793 (approximately)
  console.log(myCircle.area); // Output: 78.53981633974483 (approximately)
  
  myCircle.diameter = 8;
  console.log(myCircle.radius); // Output: 4
  console.log(myCircle.circumference); // Output: 25.132741228718345 (approximately)
  console.log(myCircle.area); // Output: 50.26548245743669 (approximately)
  