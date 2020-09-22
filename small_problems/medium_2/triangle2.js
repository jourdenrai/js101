function triangle(deg1, deg2, deg3) {
  let arr = [deg1, deg2, deg3];
  if (arr.reduce((a, b) => a * b) === 0 ||
      arr.reduce((a, b) => a + b) !== 180) return "invalid";
  if (arr.includes(90)) return "right";
  if (arr.every((angle) => angle < 90)) return "acute";
  return "obtuse";
}
triangle(60, 70, 50); // "acute"
triangle(30, 90, 60); // "right"
triangle(120, 50, 10); // "obtuse"
triangle(0, 90, 90); // "invalid"
triangle(50, 50, 50); // "invalid"
