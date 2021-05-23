/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    // it workes but not alowed
    // return parseInt(Math.sqrt(x));
    if (x<=1) {
        return x;
    } else {

        for (let i = 2; i <= x; i++) {
            if(i*i>x) {
                return i-1;
            }
        }
    }
};