/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
     let lastIndex = digits.length-1 
  digits[lastIndex]++
  return digits  
};