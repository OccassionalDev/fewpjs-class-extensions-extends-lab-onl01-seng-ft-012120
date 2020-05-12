// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get permiter() {
    return this.sides.reduce((a, currVal) => a + currVal);
  }
}