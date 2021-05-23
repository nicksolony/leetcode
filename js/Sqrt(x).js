/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // it workes but not alowed
    // return Math.floor(Math.sqrt(x));

    // workes, but slow
    // if (x === 0) {
    //     return 0;
    // } else if (x === 1) {
    //     return 1;
    // } else {

    //     for (let i = 2; i <= x; i++) {
    //         if (i * i > x) {
    //             return i - 1;
    //         }
    //     }
    // }

    //copied
    debugger
    if(x == 0) {return 0;}
    let start = 1; let end = Math.ceil(x/2);
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(Math.floor(x/mid) == mid || Math.floor(x/(mid+1)) == mid) { 
            return mid;
        } else if(Math.floor(x/mid) > mid) {
            start = mid+1;
        } else {
            end = mid - 1;
        }
    }


};