// URL
// https://leetcode.com/problems/3sum/


// INSTRUCTIONS
/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/* PSEUDO CODE
- we are returning an array of arrays, so we will need to set up out outer array.
  - let result = []; where we will push our triplets
- we will want each of our iterators to skip duplicates
- we can sort our array to make finding duplicates easier
- because we are working with a sorted array, and comparing multiple elements in the array, we can use the two-pointer technique
- can rearrange our problem to be similar to two sum, where we want to find two elements in the array to equal a target
  - nums[j] + nums[k] = 0 - nums[i]
  - in this case, our target is 0 - nums[i]
  - our pointers will be nums[j] and nums[k]
*/

// SOLUTION
/**
 * @param {number[]} nums
 * @returns {number[][]}
 */

const threeSum = (nums) => {
  let result = [];
  nums.sort((a,b) => a- b) // sort in ascending order so we can find duplicates easier

  for(let i=0;i<nums.length;i++){
    if(i > 0 && nums[i] === nums[i - 1]) continue; 

    let left = i + 1;
    let right = nums.length - 1;
    let target = 0 - nums[i];
    
    // begin our pointers loop
    while(left < right) { 
      let sum = nums[left] + nums[right]

      if(sum > target) {
        right--
      } else if (sum < target ) {
        left ++
      } else {
        result.push([nums[i], nums[left], nums[right]])
        // then continue moving through to find more triplets
        while(nums[left] === nums[left + 1]) left++;
        while(nums[right] === nums[right - 1]) right--;
        // if those loops are done ^ finding duplicates, continue moving through array until left = right
        left++;
        right--;
      }
    }
  }

  return result;
}

// TEST CASES
console.log(threeSum([-1,0,1,2,-1,-4]), [[-1,-1,2],[-1,0,1]])
console.log(threeSum([0,1,1]), [])
console.log(threeSum([0,0,0]), [[0,0,0]])
