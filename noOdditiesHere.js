
//Write a small function that returns the values of an array that are not odd.

//All values in the array will be integers. Return the good values in the order they are given.



//answer:

//p:even numbers, whole number
//r: all even in array
//e:


function noOdds( values ){
    // Return all non-odd values
   return values.filter((element) => element % 2 === 0 )
  }
  
  
  //noOdds([0,3,2,1,6])//([0,2,6])