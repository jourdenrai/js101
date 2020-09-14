let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
console.log(str1[str1.length - 1] === '!');
console.log(str2[str2.length - 1] === '!');
console.log(str1.endsWith('!'));

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
let keys = Object.keys(ages);
console.log(keys.includes('Spot'));
console.log(ages.hasOwnProperty('Spot'));

let munstersDescription = "the Munsters are CREEPY and Spooky.";
console.log(`${munstersDescription[0].toUpperCase()}${munstersDescription.slice(1).toLowerCase()} `);

ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
ages = Object.assign(ages, additionalAges);
console.log(ages);

str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino','Happy');
console.log(flintstones);

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.slice(0,advice.indexOf('house')));

