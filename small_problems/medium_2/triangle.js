function triangle(s1,s2,s3) {
  let array = [s1, s2, s3];
  array.sort((a, b) => a - b);

  let shortest = array[0];
  let middle = array[1];
  let longest = array[2];

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(shortest, middle, longest);
  } else return 'invalid';
}
function getTriangleType(shortest, middle, longest) {
  if (shortest === middle && middle === longest) {
    return 'equilateral';
  } else if (shortest !== middle && middle !== longest) {
    return 'scalene';
  } else return 'isosceles';
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && shortest + middle > longest;
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"