// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]




//answer:

//p:subtract one list from another,whole numbers
//r: return the results
//e:


function arrayDiff(a, b) {
  //return a loop going through both parameters checking for b
 return a.filter((element) => !b.includes(element))

  
}

//arrayDiff([1,4,5,6,6],[6,1])//([4,5])
//arrayDiff([2,2,2,3,4],[2])//([3,4])