// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get perimeter() {
    return this.sides.reduce((a, currVal) => a + currVal);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sides)) return false;
    if (this.count !== 3) return false;
    
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1));
  }
}