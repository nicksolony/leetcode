/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {

    let a = num1, b = num2;

    if (parseInt(a)==0 || parseInt(b)==0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    let result = [];

    for (let i = 0;a[i]>=0; i++) {
        for (let j = 0; b[j]>=0; j++) {
            if (!result[i+j]) {
                result[i+j] = 0;
            }
            result[i+j] += a[i]*b[j];
        }        
    }
    for (let i = 0; result[i]>=0; i++ ) {
        if (result[i]>=10) {
            if(!result[i+1]){
                result[i+1]=0;
            }
            result[i+1]+= parseInt(result[i]/10);
            result[i] %=10;
        }
    }
    return result.reverse().join('');
};