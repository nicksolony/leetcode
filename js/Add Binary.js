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
    let i = 0;
    let r = 0;

    function add(result, plus, i, r) {
        // debugger
        if (result[i] && plus[i]) {
            if (result[i] + plus[i] + r > 1) {
                result[i] = (result[i] + plus[i] + r) % 2;
                r = 1;
            } else {
                result[i] = result[i] + plus[i] + r;
            }
            i++
            add(result, plus, i, r);
        } else if (plus[i] && r>0) {
            result[i]=
            result.concat(plus.slice(i))
        }

    }

    add(result, plus, i, r)
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