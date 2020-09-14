function getGrade(num1, num2, num3) {
  let avgScore = (num1 + num2 + num3) / 3;
  if (90 <= avgScore && avgScore <= 100) {
    return "A";
  } else if (80 <= avgScore && avgScore < 90) {
    return "B";
  } else if (70 <= avgScore && avgScore < 80) {
    return "C";
  } else if (60 <= avgScore && avgScore < 70) {
    return "D";
  } else return 'F';
}

getGrade(95, 90, 93); // "A"
getGrade(50, 50, 95); // "D"
