// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
// Good luck!




//Answer

//p: given three values build array
//r: return array of length n alternating the two values
//e:
function alternate(n, firstValue, secondValue){
    const array = []
   for (i = 0; i < n; i++){
     if (i % 2){
       array.push(secondValue)
     }else{
       array.push(firstValue)
     }
   }
   return array
  }
  
  
  //alternate(5,red,blue) return [red,blue,red,blue,red]