//URL--
// https://leetcode.com/problems/valid-parentheses/


//INSTRUCTIONS--
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/* PSEUDO CODE
- for each open bracket, we want to check the same string and make sure the element after is its closing bracket.
- comparing two elements at once usually requires nested loops. we can save some time using hashing.
- create a map where the key is the open bracket, the value is the closing bracket. we will have a map of the pairs.
- iterate through our string, and we can use a set to push our opening brackets to.
- when we come across a closing bracket, the last thing pushed to our stack should be its corresponding open bracket. we can use map[stack.pop()] to pop off the last item in the stack, use that value for our map.
*/


//SOLUTION--

/**
 * @param {string} s
 * @return {boolean}
 */

const validParens = (s) => {
    let pairs = {
        "{": "}",
        "[": "]",
        "(": ")",
    }

    let stack = [];
    for(let bracket of s){
        if(bracket === "(" || bracket === "{" || bracket === "[") {
            stack.push(bracket)
        } else if (pairs[stack.pop()] !== bracket) {
            return false;
        }
    }
    return stack.length === 0;
}


//TESTCASES--
console.log(validParens('()'), true);
console.log(validParens('()[]{}'), true);
console.log(validParens('(]'), false);
console.log(validParens('(()){}'), true);
console.log(validParens('({})'), true);