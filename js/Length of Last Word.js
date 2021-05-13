/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    s.trim()
    let arr = s.split(" ");
    
    if (arr[arr.length-1]) {
        return arr[arr.length-1].length
    } else {
        return 0
    }

};