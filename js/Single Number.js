/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
   return nums.forEach(element => {
        return nums.find(number=>number!==element)
        });
    };