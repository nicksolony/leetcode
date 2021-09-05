/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"" ]/g;
    let cleanString = s.replace(regex, '').toLowerCase();
    let m = parseInt(cleanString.length / 2);
    let result;

    for (let i = 0; i <= m; i++) {
        if (cleanString[i] === cleanString[cleanString.length - 1 - i]) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
    return result;

};