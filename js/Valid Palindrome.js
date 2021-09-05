/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let m = parseInt(s.length/2);
    let result;

    for (let i = 0; i <= m; i++) {
        
        if (s[i]===s[s.length-1-i]) {
            result = true;
        } else {
            result = false;
        }
    }

    return result;
};