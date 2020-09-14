function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || 0;
  let uppercaseChars = string.math(/[A-z]/g) || 0;
  let neitherChars = string.match(/[^a-z]/gi) || 0;
  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }