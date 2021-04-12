/**
 * @param {number[]} nums
 * @return {number}
 */


// THIS SOLITION IS FASTER, BUT IT ONLY GIVES LENGTH OF THE NEW ARRAY WE MIGHT GET, HOWEVER OLD ARRAY REMAINS THE SAME
//  var removeDuplicates = function(nums) {
//    if (nums.length===0) {
//        return 0;
//    }
//    let current = 0;
//    for (let i = 0; i < nums.length; i++) {
//        if (nums[current]!==nums[i]) {
//            current++;
//            nums[current]=nums[i]
   
//        }
   
//    }
//        console.log(nums)
//   return current +1;
//  }

// THIS SOLUTION I BUILD MYSELF USING RECURSION

var removeDuplicates = function(nums) {
    if (nums.length===0) {
        return 0;
    }
     
    dups(0,nums);
    
    function dups(current,nums) {
        if (current === nums.length-1) {
            return nums.length;
        } else {
        if (nums[current]!==nums[current+1]) {
            current++;
            dups(current,nums);
        } else {
            nums.splice(current+1,1);
            dups(current,nums)
        }
        }
    };
  };