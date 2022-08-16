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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/* 
~~~ PSEUDO CODE ~~~

A unique integer from array nums will be the key; the frequency of that integer will be its corresponding value.
So when nums = [1,1,2,2,2,3] and k = 1
Then key-value pair will look like: 1 => 2, 2 => 3, 3 => 1
Our goal is to grab the k amount of keys of whichever key(s) have the highest value.
We want our answer in an array; so in this case, where k = 1, we want one key with the highest value (most frequent in the original nums array). So the output would be [2]
We could organize the keys so that they are sorted in order of ascending or descending values; this way, grabbing k amount of keys would be simpler

Example ( where k = 1 ):
nums = [1,1,2,2,2,3]
k = 1

What the initial map will look like:
Map {
1 => 2
2 => 3
3 => 1
}

Answer = [2]

Place nums into map:
nums.forEach(n => map.set(n, map.get(n) + 1 || 1)); -- map.get(n) will look to see if the n is already in the map, and if its there, the value will be the value of key n + 1 ... if its not there, it will set the key n with the value 1

Sort the map (we can only do this by placing in an array, because map's are organized by the order they were added to the map)
Place map in array: let sortedArray = [...map.entries()]
We should have sortedArray = [[1,2],[2,3],[3,1]]
Sort the array in descending order: sortedArray.sort((a, b) => b[1] - a[1])
We now should have sortedArray = [[2,3][1,2][3,1]] -- remember, these are paired as [Integer From nums, frequency Of That Integer]

Because sortedArray is ordered, we can loop through sortedArray for the amount of times k asks for and grab sortedArray[index][theFirstElementWillBeTheIntegerFromOriginalArray] and push it into an array which will be our answer
So let answer = []
And loop through sortedArray for amount of k:
for(let i = 0; i < k; i++) {
        answer.push(sortedArray[i][0]);
}



----------------------------------------

Example ( where k > 1 ):
nums = [1,1,2,2,2,3]
k = 2

What the initial map will look like:
Map {
1 => 2
2 => 3
3 => 1
}

Answer = [1,2]

*/

var topKFrequent = function(nums, k) {
    const m = new Map();
    const result = [];
    
    nums.forEach(n => m.set(n, m.get(n) + 1 || 1));
    
    let sortedArray = [...m.entries()].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        result.push(sortedArray[i][0]);
    }
    
    return result;
};


//TESTCASES--
console.log(topKFrequent([1,1,1,2,2,3,4,4,4,4], 1), 'Correct answer: [4]')
console.log(topKFrequent([1,1,1,2,2,3], 2), 'Correct answer: [1,2]')
console.log(topKFrequent([1,1,1,2,2,3,4,4,4,4], 2), 'Correct answer: [1,4]')
console.log(topKFrequent([1,1,5], 2), 'Correct answer: [1]')