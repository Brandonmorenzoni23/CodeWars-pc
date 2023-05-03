// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


//answer:

//p: odd-length array, numbers are the same except for one,
//r: return the single different number
//e:


function stray(numbers) {
  //loop through numbers array
  //set some conditional to find different number
  //return number
  return numbers.reduce((x, y) => x ^ y);
}

//stray([1,1,1,1,3,1,1])//==> 2
//stray([3,4,4,4,4,4,4])//==> 3