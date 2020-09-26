/**
 * Understand the problem
 * input: number that represents the size of the diamond
 *        number represents the total number of rows, widht of widest row
 * output: return value is insignificant
 *         print out a diamond made up of * characters
 * requirements:
 *        each row is a string of asterisks prepended by spaces
 *        the 5 rows will have 1, 3, 5, 3, and 1 asteriks
 *        the 5 rows will have 2, 1, 0, 1, and 2 spaces prepended
 * Algorithm:
 *        intialize increment to 2
 *        start with the first number, 1, incrementing the number by increment
 *        when the number is equal to n, flip the increment to -2
 *        stop when we get a negative number
 */

function diamond(n) {
  let increment = 2;
  for (let i = 1; i > 0; i += increment) {
    console.log(' '.repeat((n - i) / 2) + '*'.repeat(i));
    if (i === n) increment = -2;
  }
}
diamond(1);
diamond(5);
diamond(3);
diamond(9);