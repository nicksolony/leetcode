/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {


    /*check if needle is empty string return 0*/
    if (needle === "") {
        return 0;
    } else {

    /*set current position of needle to -1 */
    let pos = 0;
    let result = -1;
    let needleSize = needle.length
    
    find(haystack, needle, pos);
    
    function find(haystack, needle, pos) {
        if (pos<=haystack.length-1) {
            if (haystack.slice(pos,pos+needleSize)===needle) {
                result = pos;
            } else {
                pos++;
                find(haystack, needle, pos)
            }    
        }
    }
    
    return result;
    }
};
