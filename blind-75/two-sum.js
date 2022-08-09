//URL--
// https://leetcode.com/problems/two-sum/

//INSTRUCTIONS--
/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.
*/

//SOLUTION--

// Without Hashmap:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

// I am given an array of integers "num" and I want two integers to add up to be our "target" number
// So if I have an array nums = [2,7,11,15] and my target is 9, then I can clearly see that 2 + 7 = 9.
// I am told to return the indeces of those numbers, which would be 0 and 1, respectfully.
// So essentially, I am looking through the array for two numbers that will add up to the sum that is "target"
// I immediately know that I will need a for loop to iterate through the array to grab a number.
// I know I will need to grab a second number, essentially simultaneously, so that I can add that second number to the first number.
// Therefore, I will need a second for loop.
// Then, after grabbing one number with a for loop, grabbing a second number with the second for loop, I will need to compare these numbers

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) { // iterate through the array of numbers to grab our first integer
        for (let j = i+1; j < nums.length; j++) // as we hold onto that first integer, i, we need to grab another number to compare to i. so we use a for loop to interate through the array, grabbing each remaining number to compare it to i until one of they meets the condition. and if none of them meets our condition, the loop ends, and the first for loop will move on to a new i, starting a new j for loop.... now, we start at j=i+1 because we want to start at the integer after the one we just grabbed - we don't want j to be i or we are just comparing the same number, and as the directions state, we may not use the same element twice. so let j be the number that follows i.
            if (nums[j] === target - nums[i]) { // if we have i + j = target, and we grabbed i and we are holding onto i until this j-forloop is finished... then we know i, and we know target, so then we could say j = target - i. 
                return nums = [i,j]
            }
    }
}

//With Object:

// Object "map":
// [2,7,11,15] target = 9
// 2: 0
// 7: 1
// 11: 2
// 15: 3
// target - keyA = value
// check to see if hashmap has that value


const twoSum = (nums, target) => {
    const map = {}
    
    for(let i=0;i<nums.length;i++){
        map[nums[i]] = i
    }
    
    for(let i=0;i<nums.length;i++){
        let value = target - nums[i]
        if (map[value] && map[value] !== i) {
            return [map[value], i]
        } 
    }
}


// With Map:

const twoSum = (nums, target) => {
    const map = new Map();

    for(let i=0;i<nums.length;i++){
        if ( map.has(target - nums[i]) ) {
            return [map.get(target - nums[i]), i];
        } else ( map.set(nums[i], i) )
    }
        // Map() { value => index }
    return [];
}


//TESTCASES--
console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);