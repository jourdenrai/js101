function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

isOdd(2); // => false
isOdd(5); // => true
isOdd(-17); // => true
isOdd(-8); // => false
isOdd(0); // => false
isOdd(7); // => true

/* PSEUDOCODE ---
#given an integer
evaluate if integer is odd or not
  use absolute value to determine all negative, zero, or positive values
return result

START
SET idOdd = false
IF absolute value of integer is odd
  SET isOdd = true
PRINT isODD
END
---------------  */
