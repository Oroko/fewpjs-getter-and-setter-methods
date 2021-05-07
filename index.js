// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius
  }

  get diameter(){
    return this.radius + this.radius
  }
  get circumference(){
    return Math.PI * (this.radius + this.radius)
  }
  get area(){
    return Math.PI * this.radius * this.radius
  }

  set diameter(diameter){
    this._diameter = diameter
    return this.radius  = this._diameter / 2
  }

  set circumference(circum){
    this._circumference = circum
    this.diameter = (this._circumference / Math.PI) 
    return this.radius = this.diameter / 2
  }
  set area(value){
    this._area = value
    this.radius = Math.sqrt(this._area/Math.PI)
    return this.radius
  }

}