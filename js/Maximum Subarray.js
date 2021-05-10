/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    
    let currSum = nums[0]
    let maxSum = currSum;

    // double loop solution
    // starting form first element find max element for each option - this is slow option
    // for (let i = 0; i < nums.length; i++) {
    //     currSum = nums[i];
    //     if (currSum > maxSum) {
    //         maxSum = currSum
    //     }
    //     for (let j = i + 1; j < nums.length; j++) {
    //         currSum = currSum + nums[j];
    //         if (currSum > maxSum) {
    //             maxSum = currSum
    //         }
    //     }
    // }
    


    //Kadane's algorithm solution
    //check subarrays in linear way and reset sum each time current sum is lower than new element of sub array.
    for (let i = 1; i < nums.length; i++) {
        if (currSum + nums[i] < nums[i]) {
            currSum = nums[i]
        } else {
            currSum = currSum + nums[i];
        }
        if (currSum > maxSum) {
            maxSum = currSum  
        }
    }

    return maxSum;

};