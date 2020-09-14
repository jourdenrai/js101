function century(year) {
  let centuryYear = Math.ceil(year / 100);

  if (centuryYear === 11 || centuryYear === 12 || centuryYear === 13) {
    return "" + centuryYear + "th";
  }
  switch (centuryYear % 10) {
    case 1:
      return "" + centuryYear + "st";
    case 2:
      return "" + centuryYear + "nd";
    case 3:
      return "" + centuryYear + "rd";
    default:
      return "" + centuryYear + "th";
  }
}
console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(150)); // "2nd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
