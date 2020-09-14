let MAX = 360;
let MIN = 0;

function dms(decimal) {
  let DEGREE = '\xB0';
  let degree = fixDegree(Math.floor(decimal));
  let minutes = Math.floor((decimal % 1) * 60);
  let seconds = Math.floor((((decimal % 1) * 60) % 1) * 60);

  return `${padZeroes(degree)}${DEGREE}${padZeroes(minutes)}'${padZeroes(seconds)}"`;
}
function fixDegree(number) {
  if (Math.abs(number) > MAX && Math.sign(number) === -1) {
    return MAX - (Math.abs(number) %  MAX);
  } else if (number > MAX) {
    return Math.abs(number) - MAX;
  } else if (number < MIN) {
    return MAX - Math.abs(number);
  } else return number;
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"