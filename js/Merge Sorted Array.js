/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    if (m===0 && n>0) {
        nums1=nums2;
    } else {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if(nums1[i]===nums2[j]) {
                    nums1.splice(i+1,0,nums2[j])
                }    
            }            
        }
    }
};