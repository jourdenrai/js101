function wordSizes(string) {
  let array = string.replace(/[^a-z0-9 +]+/gi, "").split(" ");
  let obj = {};

  array.forEach(num => {
    if (num.length) {
      if (obj[num.length]) obj[num.length] += 1;
      else obj[num.length] = 1;
    } else return obj;
  });

  return obj;
}

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "2": 1, "3": 1, "5": 1 }
wordSizes(""); //{}
