/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/** 
 * My solution and logic
    1. take nums[i] compare with target
    2. if equals target return i
    3. else if num [i] is less then target return i+1
    4. else i++ go back to step 1
*/
 var searchInsert = function(nums, target) {
    
    let pos = 0;
    let result = 0;  

    if (nums[0]<target) {
        find(nums,target,pos);
        function find(nums,target, pos) {
            if (nums[pos]===target) {
                result = pos;
            } else if (nums[pos+1]> target || pos+1===nums.length) {
                result = pos+1;
            } else {
                pos++;
                find(nums,target,pos)
            }    
        }
    }
    return result;
};

/* FOUND FASTER solution:
    1. create a new array by adding target
    2. sort new array
    3. return indexOf target within new array 
    
    CODE - 

    var searchInsert = function(nums, target) {
        let newArray = [...nums, target].sort((a, b) => {return a - b})
        const position = newArray.indexOf(target)
        return position
    };


*/
