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
    
    let side1 = this.sides[0]
  }
}