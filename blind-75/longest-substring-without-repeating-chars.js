// URL
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// INSTRUCTIONS
/*
  Given a string s, find the length of the longest substring without repeating characters.
*/

/* PSEUDO CODE
- we can use a sliding window and a set for checking for duplicates in linear time.
- our left pointer will start a 0, and we will assume we are beginning a sequence. our maxSeqLength will start at 0.
- our right pointer will always be moving so we can use a for loop
- we can store our current sequence in a Set, because it automatically removes duplicates. so are we traverse through our array, our Set.length is our current sequence length.
- when we come across a duplicate, that signals the end of our current sequence. so we will move our sequence starter from the sequence (from our Set).
*/

// SOLUTION

const longestSubstring = (s) => {
  const set = new Set();
  let l = 0;
  let max = 0;

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, set.size);
  }
  return max;
};

// TEST CASES

console.log(
  longestSubstring("abcabcbb"),
  `Output: 3. Explanation: The answer is "abc", with the length of 3.`
);
console.log(
  longestSubstring("bbbbb"),
  `Output: 1. Explanation: The answer is "b", with the length of 1.`
);
console.log(
  longestSubstring("pwwkew"),
  `Output: 3. Explanation: The answer is "wke", with the length of 3.`
);
