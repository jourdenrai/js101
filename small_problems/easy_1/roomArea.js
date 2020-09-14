
let rlSync = require("readline-sync");

const METERS_TO_FEET = 10.7639;
let areaFeet, areaMeters, inputType;

while (inputType !== "m" && inputType !== "f") {
  inputType = rlSync.question("(m)eters or (f)eet? ");
}

inputType = inputType === "m" ? "meters" : "feet";

let length = rlSync.question(`Please enter the room length in ${inputType}: `);
let width = rlSync.question(`Please enter the room width in ${inputType}: `);

length = parseInt(length, 10);
width = parseInt(width, 10);

if (inputType === "feet") {
  areaFeet = length * width;
  areaMeters = areaFeet / METERS_TO_FEET;
  console.log(
    `The area of the room is ${areaFeet.toFixed(
      2
    )} square ${inputType} (${areaMeters.toFixed(2)} square meters).`
  );
} else {
  areaMeters = length * width;
  areaFeet = areaMeters * METERS_TO_FEET;
  console.log(
    `The area of the room is ${areaMeters.toFixed(
      2
    )} square ${inputType} (${areaFeet.toFixed(2)} square feet).`
  );
}

/* PSEUDOSCODE
ask for length and width of room in meters
calculate area for room in meters and feet
print the area for both measurements

START
  SET METERS_TO_FEET = 10.7639
  SET areaFeet, areaMeters, inputType, lengthMeters, widthmeters

  GET ask user for length in meters
  GET ask user for widht in meters

  SET areaMeters = lengthMeters * widthMeters
  SET areaFeet = areaMeters * METERS_TO_FEET

  PRINT areaFeet and areaMeters
END

 */