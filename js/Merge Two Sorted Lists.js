/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    /** 
     * Handle edge cases
     * 1. Return null if both linked lists are empty
     * 2. If one of the two linked lists is empty, return the non-empty linked list
     */
    if (l1 === null && l2 === null) {
        return null
    } else if (l1 === null && l2 !== null) {
        return l2;
    } else if (l2 === null && l1 !== null) {
        return l1;
    }

    return merge(l1, l2);
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function merge(l1, l2) {
    let dummyHead = new ListNode();
    let tail = dummyHead;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
            tail = tail.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
            tail = tail.next;
        }
    }

    tail.next = (l1 !== null) ? l1 : l2;

    return dummyHead.next;
}

// option 1
// var mergeTwoLists = function (l1, l2) {

//     if (l1===null) return l2
//     if (l2===null) return l1
//     let dummy = {val:0, next:l2}
//     let mergedList = dummy
//     while (l1 !== null) {
//         let n1 = l1.val
//         let n2 = l2.val
//         if (n1<n2) {
//             mergedList.next = l1
//             mergedList = mergedList.next
//             l1 = mergedList.next
//             mergedList.next = l2  
//         } else {
//             if (l2.next!==null) {
//                 mergedList=mergedList.next
//                 l2 = l2.next
//             } else {
//                 l2.next = l1
//                 break
//             }
//         }
//     }
//     return dummy.next
// };


//worked in browser, but not using sinlgly linked list
// var mergeTwoLists = function (l1, l2) {

//     if((l1.length===0) && (l2.length===0)) {
//         return null;
//     } else if (l1.length===0 && l2.length!==0) {
//         return l2;
//     } else if (l1.length!==0 && l2.length===0) {
//         return l1;
//     } else {
//       return merge(l1, l2);
//     }

//     function merge(l1,l2) {

//         let i1=0;
//         let i2=0;
//         let mergedList = []
//         // debugger
//         while ((i1!==l1.length) || (i2!==l2.length)) {
//             if ((l1[i1]<l2[i2]) || (i2===l2.length)) {
//                 mergedList.push(l1[i1])
//                 i1++
//                 } else {
//                 mergedList.push(l2[i2])
//                 i2++
//             }
//         }
//         return mergedList;

//     }

// };




//this worked in practice, but needed different solution.

// var mergeTwoLists = function(l1, l2) {

//     //merge 2 arrays
//     let mergedList = l1.concat(l2);

//     //sort arrays
//     return mergedList.sort();


// };