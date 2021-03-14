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
    
    if((l1.length===0) && (l2.length===0)) {
        return null;
    } else if (l1.length===0 && l2.length!==0) {
        return l2;
    } else if (l1.length!==0 && l2.length===0) {
        re;
    } else {
      return merge(l1, l2);
    }

    function merge(l1,l2) {
        
        let i1=0;
        let i2=0;
        let mergedList = []
        // debugger
        while ((i1!==l1.length) || (i2!==l2.length)) {
            if ((l1[i1]<l2[i2]) || (i2===l2.length)) {
                mergedList.push(l1[i1])
                i1++
                } else {
                mergedList.push(l2[i2])
                i2++
            }
        }
        return mergedList;
        
    }

};




//this worked in practice, but needed different solution.

// var mergeTwoLists = function(l1, l2) {

//     //merge 2 arrays
//     let mergedList = l1.concat(l2);

//     //sort arrays
//     return mergedList.sort();


// };