function triangle(deg1, deg2, deg3) {
  if(isValid(deg1, deg2, deg3)) {
    return getTriangleType(deg1, deg2, deg3)
  } else return 'invalid'
}

function isValid(num1,num2,num3) {
  let array = [num1, num2, num3];
  let sum = array.reduce((a,b) => a +b);
  return sum === 180 && !(num1 === 0 || num2 === 0 || num3 === 0)
}

function getTriangleType(deg1, deg2, deg3) {
  if(deg1 === 90 || deg2 === 90 || deg3 === 90) {
    return 'right';
  } else if (deg1 > 90 || deg2 > 90 || deg3 > 90) {
    return 'obtuse';
  } else return 'acute'
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"