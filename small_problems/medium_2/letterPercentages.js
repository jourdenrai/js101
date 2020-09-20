function letterPercentages(string) {
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let neitherCount = 0;
  let stringLength = string.split('').length;

  string.split('').forEach(val => {
    if (val >= 'a' && val <= 'z') {
      lowercaseCount++;
    } else if ( val >= 'A' && val <= 'Z') {
      uppercaseCount++;
    } else neitherCount++;
  });
  let obj = {
    lowercase: calculatePercentage(lowercaseCount,stringLength),
    uppercase: calculatePercentage(uppercaseCount,stringLength),
    neither: calculatePercentage(neitherCount,stringLength)
  };
  return obj;
}

function calculatePercentage(num, total) {
  return "" + ((num / total) * 100).toFixed(2);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }