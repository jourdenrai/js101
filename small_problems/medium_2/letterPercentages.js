function letterPercentages(string) {
  let lowercaseCount = (string.match(/[a-z]/g) || []).length;
  let uppercaseCount = (string.match(/[A-Z]/g) || []).length;
  let neitherCount = (string.match(/[^a-z]/gi) || []).length;
  let stringLength = string.length;

  return {
    lowercase: calculatePercentage(lowercaseCount, stringLength),
    uppercase: calculatePercentage(uppercaseCount, stringLength),
    neither: calculatePercentage(neitherCount, stringLength),
  };
}

function calculatePercentage(num, total) {
  return "" + ((num / total) * 100).toFixed(2);
}

letterPercentages("abCdef 123");
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef");
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123");
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
