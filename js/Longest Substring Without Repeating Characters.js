/**
 * @param {string} s
 * @return {number}
 */


 var lengthOfLongestSubstring = function(s) {
   
    let longest = 0;
    let substring = []

    for(let e of s) {
        if(substring.includes(e)) {
            if (substring.length > longest) {
                longest = substring.length
            }
            substring.push(e)
            let index = substring.indexOf(e)
            substring = substring.slice(index+1)
        } else {
            substring.push(e)
        }
    }

    if(substring.length > longest) {
        longest = substring.length;
    }
    return longest;
}

