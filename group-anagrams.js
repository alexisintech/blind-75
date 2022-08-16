//URL--
// https://leetcode.com/problems/group-anagrams/


//INSTRUCTIONS--
/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/


//SOLUTION--

// Without Map

const groupAnagrams = strs => {
    let object = {};
    
    for (let str of strs) {
        let letters = str.split("").sort().join("");
        object[letters] ? object[letters].push(str) : object[letters] = [str];
        console.log(object);
    }
    
    return Object.values(object);
};

        // With example strs = ["eat","tea","tan","ate","nat","bat"]
        /*
            const groupAnagrams = strs => {
                let object = {};

                for (let str of strs) {
                    let letters = str.split("").sort().join("");
                    object[letters] ? object[letters].push(str) : object[letters] = [str];
                    console.log(object);
                }

                return Object.values(object);
            };
        */

// With Map

const groupAnagrams = strs => {
    let m = new Map();
    for (let str of strs) { // for each element in the given array strs
        let sorted = str.split("").sort().join(""); // take that element, split it, sort it alphabetically, and then join it to be one string. store that word as sorted
        if (m.has(sorted)) { // take that sorted word "sorted" and see if our map has it as a key.
            m.set(sorted, [...m.get(sorted), str]); // if the map has that key, then set the value to be whatever was already in the values (...m.get(sorted)) plus the addition of the current element we're adding (str)
        }
        else { m.set(sorted, [str]); } // if the map does not have the sorted word as a key yet, then set it as a key and add a value --> the original element from the array "str" stored in an array
    }
    return Array.from(m.values()); // return all the values from each of the map's keys
};


//TESTCASES--
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]), [["bat"],["nat","tan"],["ate","eat","tea"]])
console.log(groupAnagrams(["a"]), [["a"]])
console.log(groupAnagrams([""]), [[""]])