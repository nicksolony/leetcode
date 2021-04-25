/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (nums.length === 0) {
        return 0;
    }
    remove(0, nums, val);

    function remove(current, nums, val) {
        if (current <= nums.length - 1) {
            if (nums[current] !== val) {
                remove(current + 1, nums, val);
            } else {
                nums.splice(current, 1);
                remove(current, nums, val)
            }
        }
    };

    return nums.length;
};