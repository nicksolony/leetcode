/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    
    let values = []

    for (let i = 0; i < numRows; i++) {
        values[i] = [];
        values[i][0]=1;
        for (let j = 1; j < i; j++) {    
            values[i][j] = values[i-1][j-1]+values[i-1][j]
        }
        values[i][i] = 1;
    }

    return values;
};