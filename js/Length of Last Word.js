/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let arr = s.trim().split(" ");

    if (arr[arr.length - 1]) {
        return arr[arr.length - 1].length
    } else {
        return 0
    }

};