// Your code here
class Polygon {
    constructor(arr) {
        this.sides = arr
    }
get countSides(){
    return this.sides.length
}
get perimeter(){
return this.sides.reduce((side, total) => total += side ) //adding a each side
}
}
class Triangle extends Polygon{
get isValid() {
    if(this.countSides === 3) {
    
        this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[3] && this.sides[3] + this.sides[2] > this.sides[1]
    }
}
}
class Square extends Polygon{
    get area() {

return this.sides[0] * this.sides[1]
    }

    get isValid() {
        let test = this.sides[0]
        let count = 1
for(let i = 1; i < this.sides.length; i++) {
 test === this.sides[i] ? count += 1 : null
    }
    return this.sides.length === count
}
}