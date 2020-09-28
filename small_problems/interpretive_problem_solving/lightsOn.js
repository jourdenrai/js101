/*
/Understand the Problem
----------------------
input: total number of switches
output: return array of thel ights that are on after count passes
rules: every switch is initially off
       first pass you toggle every one of them
       second pass you toggle every second one
       third pass => third one
       etc.. until number of passes == number of switches
       return array of lights that are on after rounds
Examples
--------
lightsOn(5);        // [1, 4]
lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

Data structures / Algorithm
---------------------------
array => obj => array

#given a count

loop through the rounds from 1 to count, and for each round:
  if current round is nth, toggle the lights whose indices are multiples of nth
  use map to return a new array to represent the new states
filter/map the lights array to return a new array containing
  the indices of the lights that are on

*/


function lightsOn(count) {
  let lights = initializeLights(count);

  for (let switchNum = 1; switchNum <= count; switchNum += 1) {
    // rounds: 1..count
    lights = toggleLights(lights, switchNum);
  }

  let result = [];
  for (let idx = 0; idx < count; idx += 1) {
    // indices: 0..count-1
    if (lights[idx]) {
      result.push(idx + 1);
    }
  }

  return result;
}

function initializeLights(count) {
  let lights = [];

  for (let switchNum = 0; switchNum < count; switchNum += 1) {
    lights.push(false);
  }

  return lights;
}

function toggleLights(lights, round) {
  return lights.map((light, index) => {
    return (index + 1) % round === 0 ? !light : light;
  });
}
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

