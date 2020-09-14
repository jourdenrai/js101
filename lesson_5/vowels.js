let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.keys(obj).forEach(key => {
  obj[key].forEach(string => {
    string.split('').forEach(letter => {
      if ('aeiou'.includes(letter)) {
        console.log(letter);
      }
    });
  });
});