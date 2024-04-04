const uniqSort = function(arr){
    const breadcrumbs = {};

    for(i=0;i<arr.length;i++){
        if(breadcrumbs[arr[i]]){
            return breadcrumbs[i] = false
        }else {
            breadcrumbs[arr[i]] = true
        }

    }

    return arr.sort((a,b) => a - b)
}


console.log(uniqSort([2,2,2,5,8,1,7,0])) // => [0,1,2,5,7,8]


const times10 = (n) => {
    return n * 10;
  }
  
  const cache = {}
  
  const memoTimes10 = (n) = {
    if (n in cache) {
      return cache[n];
    } else {
      let result = times10(n);
   // cache[n] is saying create an object where the key is n & the value is result
      cache[n] = result;
      return result;
    }
  }
  console.log(memoTimes10(9))