function reverseNumber(num) {
  return String(num).split('').reverse().map(num => {
    if (num > 0) {
      return num;
    } else return '';
  }).join('');
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1