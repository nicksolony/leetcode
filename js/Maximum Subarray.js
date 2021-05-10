/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // double loop solution
    // starting form first element find max element for each option - this is slow option
    let maxSum = 0
    let currSum = 0

    for (let i = 0; i < nums.length; i++) {
        currSum = currSum + nums[i];
        
    }



    //Kadane's algorithm solution
    //check subarrays in linear way and reset sum each time current sum is lower than new element of sub array.




};