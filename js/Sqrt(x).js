/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    // it workes but not alowed
    // return parseInt(Math.sqrt(x));
    if (x===0) {
        return 0;
    } else if (x===1) {
        return 1;
    } else {

        for (let i = 2; i < x; i++) {
            if(i*i>x) {
                let result = i-1;
                return result;
            }
        }

    }
    return result;
};