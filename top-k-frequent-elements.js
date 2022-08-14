//URL--
// https://leetcode.com/problems/top-k-frequent-elements/


//INSTRUCTIONS--
/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array]. -- in other words, k will never be 0
It is guaranteed that the answer is unique.
*/


//SOLUTION--



//TESTCASES--
console.log(topKFrequent([1,1,1,2,2,3,4,4,4,4], 1), 'Correct answer: [4]')
console.log(topKFrequent([1,1,1,2,2,3], 2), 'Correct answer: [1,2]')
console.log(topKFrequent([1,1,1,2,2,3,4,4,4,4], 2), 'Correct answer: [1,4]')
console.log(topKFrequent([1,1,5], 2), 'Correct answer: [1]')