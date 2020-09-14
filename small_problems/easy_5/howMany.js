function countOccurrences(array) {
  let obj = {};

  array.forEach(val => {
    val = val.toLowerCase();
    if (obj[val]) obj[val] += 1;
    else obj[val] = 1;
  });

  Object.entries(obj)
    .map(pair => console.log(`${pair[0]} => ${pair[1]}`));
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);