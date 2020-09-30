const isBlockWord = (word) => {
  let blocks = [
    'BO', 'XK', 'DQ', 'CP',
    'NA', 'GT', 'RE', 'FS',
    'JW', 'HU', 'VI', 'LY', 'ZM'];
  for (let letter of word.toUpperCase()) {
    let blocksLengthBefore = blocks.length;
    blocks = blocks.filter(block => !block.includes(letter));
    if (blocksLengthBefore === blocks.length) return false;
  }
  return true;
};

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('floW');       // true
isBlockWord('APPLE');      // false
isBlockWord('apple');      // false
isBlockWord('apPLE');      // false
isBlockWord('Box');        // false

/*
Understand the Problem
----------------------
input: string
output: boolean
rules: takes a word string as an argument
       returns true if word can be spelled using the set of blocks
       false otherwise
       letters can be case insensitive
       only use one letter per block, and each block once

       given 13 two letter blocks
       if input contains any two letters from same block return false
       if a block is used more than once return false
       otherwise return true
       ignore case when applying the block rules

Examples
--------
  isBlockWord('BATCH');      // true
  isBlockWord('BUTCH');      // false
  isBlockWord('jest');       // true
  isBlockWord('jest');       // true
  isBlockWord('floW');       // true
  isBlockWord('APPLE');      // false
  isBlockWord('apple');      // false
  isBlockWord('apPLE');      // false
  isBlockWord('Box');        // false

Data Structures / Alogrithms
----------------------------
  #given 13 two-letter blocks
  #given a string word
  create  array to hold two-letter blocks
  loop through each letter in word and check which block it is in
    if whole block has already been used
      return false
    if letter block has laready been used
      return false

  define array that contains the 13 two letter blocks
  turn the input string to an array of letters and iterate through it
    if we can't find a block that contains the letter, return false
    otherwise, remove the block that contains the ltter from the blocks array

  return true aftwer we've processed all the letters in the input string
*/