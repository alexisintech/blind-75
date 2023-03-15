// URL
// https://leetcode.com/problems/valid-palindrome/


// INSTRUCTIONS
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/* PSEUDO CODE
- convert our string to alphanumeric, and to lowercase.
- could use .reverse() but we're going to use a two-pointer technique to compare two elements in a collection.
- our left will be on 0, right will be at end of string, and we will check if they are === until they reach the middle. if they are ever never not equal, return false.
*/

// SOLUTION

/**
 * @param {string} s 
 * @returns {boolean}
 */

const validPalindrome = (s) => {
  let s2 = s.replace(/[^0-9a-z]/gi, "").toLowerCase();

  let left = 0;
  let right = s2.length - 1;

  while(left < right){
    if(s2[left] !== s2[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// TEST CASES
console.log(validPalindrome("A man, a plan, a canal: Panama"), true)
console.log(validPalindrome("race a car"), false)
console.log(validPalindrome(" "), true)