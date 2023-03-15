// URL
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ 


// INSTRUCTIONS
/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/* PSEUDO CODE
- we can't do a max and min type deal, because we only want the max if it falls after the min. so it looks like we need some kind of pointer/window type of deal.
- we want to set our left to be our "min"
  - it will have to move to the next element if the price[left] < price[right] because that means our "min" is bigger than our max
- we want to set our right to be our "max"
  - after finding our actual min, our right will have to move to the next element until it reaches the end of the string, to ensure we found the max highest profit
  - this means we have to store the previous profit so that we are able to compare to next profit we find, to see if we found a higher profit.
*/

// SOLUTION

/**
 * @param {number[]} prices
 * @returns {number}
 */

const maxProfit = (prices) => {
  let left = 0;
  let right = 1; // this is our window to start with.
  let maxProfit = 0;
  
  while(right < prices.length){
    if(prices[left] > prices[right]) {
      left = right;
    } else {
      let profit = prices[right] - prices[left]

      maxProfit = Math.max(maxProfit, profit)
    }

    right++;
  }

  return maxProfit;
}

// TEST CASES
console.log(maxProfit([7,1,5,3,6,4]), 5)
console.log(maxProfit([8,6,1]), 0)
console.log(maxProfit([3,2,1,2,4]), 3)