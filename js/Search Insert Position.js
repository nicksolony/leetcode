/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/** 
    1. take nums[i] compare with target
    2. if equals target return i
    3. else if num [i] is less then target return i+1
    4. else i++ go back to step 1
*/
 var searchInsert = function(nums, target) {
    
    let pos = 0;    

    function find(nums,target, pos) {
        if (nums[pos]===target) {
            return pos;
        } else if (nums[pos+1]> target) {
            return pos++;
        } else {
            pos++;
            find(nums,target,pos)
        }    
    }
    

    
};