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
// This solution works in the browser, but not in leetcode because it's using an array instead of a list 
// var deleteDuplicates = function(head) {
//     dups(0, head);

//     function dups(current, nums) {
//         if (current !== nums.length - 1) {  
//             if (nums[current] !== nums[current + 1]) {
//                 dups(current + 1, nums);
//             } else {
//                 nums.splice(current + 1, 1);
//                 dups(current, nums)
//             }
//         }
//     };
//     return head;
// };
var deleteDuplicates = function(head) {
    let current = head;

    while (current && current.next) {
        if(current.val === current.next.val){
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};