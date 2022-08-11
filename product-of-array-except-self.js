//URL--
// https://leetcode.com/problems/product-of-array-except-self/


//INSTRUCTIONS--
/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/


//SOLUTION--

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Without Map

/* Doesn't work
var productExceptSelf = function(nums) {
    let answer = []

    for(let i=0;i<nums.length;i++){
        let everyNumExceptnumsi = [];
        for(let j=0;j<nums.length;j++){
            if (nums[i] !== nums[j]) {
                everyNumExceptnumsi.push(nums[j])
            }
        }
        answer.push( everyNumExceptnumsi.reduce((a,c) => a*c,1) )
    }

    return answer
};
// DOESN'T WORK. IS GIVING [1,1] AS ANSWER FOR WHEN nums=[0,0] BECAUSE OF THE REDUCE FUNCTION ^^
*/


var productExceptSelf = function(nums) {
    // Set up an empty array as our result
    const result = []
    
    // Initialize a prefix tracker at 1
    let prefix = 1
    
    // Loop through the input array - for each position,
    // the result array should equal the prefix tracker.
    
    // Then, update the prefix tracker to be the product of itself,
    // multiplied by the input value at the position.
    for (let i=0; i<nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }
    
    // Initialize a suffix tracker at 1
    let suffix = 1
    
    // Loop backwards through the array.
    // For each iteration, set the result array to be 
    // the product of itself multiplied by the suffix tracker.
    
    // Then, update the suffix tracker to be the product of itself,
    // multiplied by the input value at that position.
    for (let i=nums.length - 1; i>=0; i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }

    return result
};

//TESTCASES--
console.log(productExceptSelf([1,2,3,4]), [24,12,8,6]);
console.log(productExceptSelf([-1,1,0,-3,3]), [0,0,9,0,0]);
console.log(productExceptSelf([0,0]), [0,0]);