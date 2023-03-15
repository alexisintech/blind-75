//URL--
// https://leetcode.com/problems/valid-anagram/


//INSTRUCTIONS--
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

// PSEUDO CODE

// SOLUTION

/**
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */

const isAnagram = (s, t) => {
  if(s.length === t.length){
    let s1 = s.split("").sort().join("")
    let t1 = t.split("").sort().join("")
    return s1 == t1 ? true : false
  }
  return false;
};


// TESTCASES
console.log(isAnagram('cars', 'racs'), "correct answer: true");
console.log(isAnagram('cars', 'rats'), "correct answer: false");
console.log(isAnagram('butterfly', 'flybutter'), "correct answer: true");
console.log(isAnagram('pretty', 'petty'), "correct answer: false");
