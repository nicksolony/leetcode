/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    debugger
    let arr = s.split('')
    if (arr.length % 2 === 0){
    if ((arr.shift()=="(" && arr.pop()==")") || (arr.shift()=="[" && arr.pop()=="]") || (arr.shift()=="{" && arr.pop()=="}") || (arr.shift()=="(" && arr.shift()==")") || (arr.shift()=="[" && arr.shift()=="]") || (arr.shift()=="{" && arr.shift()=="}")) {
            if(arr.length === 0) {
            return true
            } else {
               return isValid(arr.join(''))
            }
        } else {
            return false
        }
    } else {
        return false
    }
};
