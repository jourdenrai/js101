function generateUUID() {
  let char = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  let seq = [8,4,4,4,12];
  return seq.map(section => {
    let index = 0;
    return char.map(val => {
      if (index < section) {
        index++;
        return char[Math.floor(Math.random() * char.length)];
      } else return ' ';
    }).filter(val => val !== ' ').join("");
  }).join('-');
}

console.log(generateUUID());

