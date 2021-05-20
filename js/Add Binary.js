/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    /**
     * 1. Turn each string into array
     * 2. Reverse each string
     * 3. starting with 0 index check if value exist, then use similar to plus one pattern
     * 4. if one of the values doesn't exist copy what's left of remaining array
     * 5. reverse resulting array and merge into string
     *      */


    let result = a.split("").reverse();
    let plus = b.split("").reverse();
    let r = 0;
    // debugger
    for (let i = 0, j = 0; i <= result.length-1 || j<=plus.length-1 || r > 0; i++, j++) {
        let sum = (parseInt(result[i])||0) + (parseInt(plus[j])||0) + r
        if (sum>1) {
            result[i]=sum%2
            r = 1;
        } else {
            result[i]=sum;
            r=0;
        }
        
    }

    
    return result.reverse().join("")

    /**Copied solution usin Bigint */
    /**
     * @param {string} a
    * @param {string} b
    * @return {string}
    */
    // var addBinary = function(a, b) {
    //     const aBin = `0b${a}`
    //     const bBin = `0b${b}`
    //     const sum = BigInt(aBin) + BigInt(bBin)
    //     return sum.toString(2)
    // };
  

};