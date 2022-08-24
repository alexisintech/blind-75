//URL--
// https://leetcode.com/problems/valid-sudoku/


//INSTRUCTIONS--
/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true


Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/


//SOLUTION--
/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
    for(let i=0;i<9;i++){
        let row = new Set(); // this will be the holder of our row values
        let col = new Set(); // this will hold our column values
        let box = new Set(); // this will hold our 3x3 boxes

        for(let j=0;j<9;j++){
            let _row = board[i][j]; // this is the current element of the row; so if i was 0, and j was 0, we grab the value of the first element of i which is another array, and we grab the first element of that array, so for the first example, board[0][0] would be 5
            
            if (_row != '.'){ // if the value is not a dot, we need to check if our row Set has the value (we are looking for duplicates)
                if (row.has(_row)) { // if our Set (row) has the value (_row) already in it,
                    return false; // we return false to the entire function because the board has a duplicate in a row
                } else {row.add(_row)} // if the Set (row) did not have the value (_row), then add the value to the set (add _row to row)
            }
            
            let _col = board[j][i] // this is the current element of the column (its the same rules as the row, we just have to write it again because we check both rows and columns for having duplicates)

            if (_col != '.') {
                if (col.has(_col)){
                    return false;
                } else {col.add(_col)}
            }

            /* 
            Each cell has an ij coordinate (i=row index, j=column index)
            For example, when i is 0, and j is 0, the cell has a 0,0 coordinate

            00  01  02
            10  11  12
            20  21  22
            30  31  32
            40  41  42
            50  51  52
            60  61  62

            We have to divide our entire board into these 3x3 boxes
            Luckily, our board is also divided into 3x3 sections.
            If we looked at each box like a [], our entire board would like like this (with a 0 based start):
            /*
                0   1   2
            0  []  []  []

            1  []  []  []

            2  []  []  []

                where [] is a box (with 3 rows and 3 columns, aka 9 cells)
            
            We will traverse horizontally first, and then vertically, so:

            // Use % for horizontal traversal beause 
                // 0 % 3 = 0  3 can go into zero zero times, leaving a remainder of 0 
                // 1 % 3 = 1  3 can go into 1 zero times, leaving a remainder of 1
                // 2 % 3 = 2  3 can go into 2 zero times, leaving a remainder of 2

            // Use / for vertical traversal because
                // Math.floor(0 / 3) = 0
                // Math.floor(1 / 3) = 0
                // Math.floor(2 / 3) = 0
            */

            let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)] 

            if (_box != '.'){
                if(box.has(_box)){
                    return false;
                } else {box.add(_box)}
            }
        }
    }
    return true; // and if we get through the entire board, and none of our if statements return a false, then we got thru the board successfully, the loops are finished, we return true and say the board is valid.
};


//TESTCASES--
console.log(isValidSudoku(board = 
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]), true)

console.log(isValidSudoku(board = 
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]), false)