//Question:

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


//Answer:

//arr nums, two numbers in arr will equal target number, no decimal or negative,no empty arr
//return the indices of those two numbers

//[7,4,5,3], target=9 => [1,2]
//[6,3,8,9], target=17 => [2,3]
//[103,98,47,200], target=303 => [0,3]


var twoSum = function(nums, target) {
    //grab a num
    for(i=0; i < nums.length; i++){
        //comparing to i
        for(k=0;k<nums.length;k++){
            if(nums[i] + nums[k] === target && i !==k){
                return [i,k]
            }
        }
    }
};

console.log([7,4,5,3], 9) //=>[1,2]
console.log([6,3,8,9], 17) //=>[2,3]
console.log([103,98,47,200], 303) //=>[0,3]
