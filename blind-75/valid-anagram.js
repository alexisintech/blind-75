//URL--
// https://leetcode.com/problems/valid-anagram/


//INSTRUCTIONS--
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/


//SOLUTION--

// Check if both arrays are same length
  // If they are, sort them both by alphabetical order
  // If they aren't, they cannot be anagrams (one has more letters than the other)

// Once sorted, iterate through both to see if they are identical (if they are both sorted in alphabetical, are same length, and contain same exact letters, they can be anagrams)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
    if (s.length === t.length) {
        const string1AsArray = s.split('').sort().join('')
        const string2AsArray = t.split('').sort().join('')
        return (string1AsArray == string2AsArray) ? true : false
    }  else {return false}  
};


//TESTCASES--
console.log(isAnagram('cars', 'racs'), "correct answer: true");
console.log(isAnagram('cars', 'rats'), "correct answer: false");
console.log(isAnagram('butterfly', 'flybutter'), "correct answer: true");
console.log(isAnagram('pretty', 'petty'), "correct answer: false");
