/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {

    if (!head) {
        return false;
    }

    let fast_t = head;
    let slow_t = head;

    while (fast_t) {
        if (!fast_t.next) {
            return false;
        } else {
            fast_t = fast_t.next.next;
            slow_t = slow_t.next; 
        }
        if (fast_t === slow_t) {
            return true;
        }
    }
    return false;
};