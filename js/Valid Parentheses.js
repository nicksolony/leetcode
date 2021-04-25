/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = [];

    for (i=0; i<s.length; i++) {
        let last_element = stack[stack.length-1]
        if(s[i]==="(" || s[i]==="{" || s[i]==="[") {
            stack.push(s[i])
        } else if (
            (last_element==="(" && s[i]===")")||(last_element==="[" && s[i]==="]")||(last_element==="{" && s[i]==="}")){
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length ? false : true
};
