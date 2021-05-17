/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // 1. reverse array
    // 2. add 1, check if < 10
    // a3. <10 - reverse array back and return
    // b3. >10 - replace element with result%10
    // b4. add one to next element and repeat actions

    let rev = digits.reverse();
    let i = 0;

    function add(arr, i) {
        // debugger
        // if (arr[i]+1) {
        if (i!==arr.length) {
            if (arr[i] + 1 > 9) {
                arr[i] = (arr[i] + 1) % 10;
                i++
                add(arr, i)
            } else {
                arr[i] = arr[i] + 1
            }
        } else {
            arr.push(1)
        }
    }

    add(rev, i)

    return rev.reverse();

};