// Write a constructor function that creates points in the space. Each point in the space has its own x, y, and z coordinate. 
// For example, (3, 5, 1) can the point in the space.

// Write a function that calculates the distance between two points in the space. 



'use strict'
function CoordinateCreator(a, b, c) {

  this.x = a,
    this.y = b,
    this.z = c


}

var pointA = new CoordinateCreator(3, 5, 1);
var pointB = new CoordinateCreator(1, 2, 3)

console.log(pointB)

function distance (point1, point2){

  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2) +  Math.pow(point2.z - point1.z, 2));


}


console.log(distance(pointA, pointB));