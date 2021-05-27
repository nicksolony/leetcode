/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    switch(n) {
        case 1:
            return n;
        case 2:
            return n;
        default:
            let prevStep = 1;
            let topStep = 2;
            for (let i = 3; i <= n; i++) {
                let newBottom=topStep;
                topStep = topStep + prevStep
                prevStep = newBottom;
            };
            return topStep;
    }
    
};
