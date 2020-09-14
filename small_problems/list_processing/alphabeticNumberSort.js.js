let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven','eight', 'nine', 'ten', 'eleven', 'twelve',
  'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen',
  'eighteen', 'nineteen'];

function alphabeticNumberSort(array) {
  return array.map(num => NUMBER_WORDS[num])
    .sort()
    .map(word => NUMBER_WORDS.indexOf(word));
}

alphabeticNumberSort([1,2,3]);
alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);