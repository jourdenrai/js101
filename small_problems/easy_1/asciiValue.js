
function asciiValue(string) {
  let result = 0;
  for (let index = 0; index < string.length; index += 1) {
    result += string.charCodeAt(index);
  }
  return result;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0