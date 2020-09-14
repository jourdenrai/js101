function wordCap(strings) {
  return strings
    .split(' ')
    .map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'