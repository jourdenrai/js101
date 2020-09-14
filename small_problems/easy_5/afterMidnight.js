const HOURS_PER_DAY = 24;
const MINUTES_PER_HOURS = 60;

function afterMidnight(time) {
  let hours = getHours(time);
  let minutes = getMinutes(time);
  if (minutes !== 0 && hours !== HOURS_PER_DAY ) {
    minutes += hours * MINUTES_PER_HOURS;
  }

  return minutes;
}
function beforeMidnight(time) {
  let hours = getHours(time);
  let minutes = getMinutes(time);
  if (minutes !== 0 && hours !== HOURS_PER_DAY ) {
    minutes -= hours * MINUTES_PER_HOURS;
  }

  return Math.abs(minutes);
}
function getHours(time) {
  return Number(time.slice(0,2));
}
function getMinutes(time) {
  return Number(time.slice(3,5));
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);