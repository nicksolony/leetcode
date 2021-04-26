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

    /*set current position of to 0 and result to -1 */
    let pos = 0;
    let result = -1;
    
    find(haystack, needle, pos);
    
    function find(haystack, needle, pos) {
            if (haystack.slice(pos,pos+needle.length)===needle) {
                result = pos;
            } else {
                pos++;
                if (pos<=haystack.length-1) {
                    find(haystack, needle, pos)    
                }
            }    
        }
    
    return result;
    }
};
