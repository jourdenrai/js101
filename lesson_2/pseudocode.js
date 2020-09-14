/*
  while the user wants to keep going
    ask the user for the collection of numbers
    iterate through the collection one by one
      save the first value as the starting value
      for each iteration, compare saved value with the current value
      if saved value is greater than of equal to current number
        move to next value in collection
      otherwise if the current value is greater than the saved value
        reassign the saved value as the current value
    after iterating through the collection, save the largest value into the list
    ask the user if they want to input another collection
    return the saved list of numbers

*/

/*
  START

  SET largeNumber = []
  SET keepGoing = true

  WHILE keepGoing == true
    GET 'enter a collection
    SET collection
    SET largestNumber = SUBPROCESS 'extract 
        the largest one from that collection'
    largNumbers.push(largestNumber)
    GET 'enter another collection?'
    IF 'yes'
      keepGoing = true
    ELSE
      keepGoing = false

    PRINT largeNumbers

  END
*/
