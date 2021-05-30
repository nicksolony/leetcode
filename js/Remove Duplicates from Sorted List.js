/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    dups(0, head);

    function dups(current, nums) {
        if (current !== nums.length - 1) {  
            if (nums[current] !== nums[current + 1]) {
                dups(current + 1, nums);
            } else {
                nums.splice(current + 1, 1);
                dups(current, nums)
            }
        }
    };
    return head;
};