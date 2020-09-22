function rotateRightmostDigits(number, count) {
  let string = String(number);
  let first = string.slice(0, string.length - count);
  let end = string.slice(string.length - count);
  Number(first + rotate(end));
}

function rotate(string) {
  return string.slice(1) + string[0];
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917