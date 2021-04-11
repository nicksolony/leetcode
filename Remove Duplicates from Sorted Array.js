/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
   if (nums.length===0) {
       return 0;
   }
   let current = 0;
   for (let i = 0; i < nums.length; i++) {
       if (nums[current]!==nums[i]) {
           current++;
           nums[current]=nums[i]
       }
   }
   return current+1;
 }