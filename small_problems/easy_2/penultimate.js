
function penultimate(string) {
  if (string === "") {
    return string;
  }
  let array = string.split(" ");

  if (array.length % 2 === 0) {
    console.log("There is no middle word for even phrases!");
    return false;
  } else if (array.length % 2 !== 0) {
    return array[Math.floor(array.length / 2)];
  } else {
    console.log("Error. Please try again.");
  }
  return false;
}

console.log(penultimate("last word next okay next please okay") === "okay"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
