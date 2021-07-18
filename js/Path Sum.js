/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    
    let sum = 0;

    function checkTree(root, targetSum, sum) {
        sum= sum+root.val
        if(root.left===null && root.right ===null) {
            if(sum ===targetSum){
                return true;
            } else {
                return false;
            }
        } else if (root.left) {
            checkTree(root.left,targetSum,sum)
        } checkTree(root.right,targetSum,sum)
    }

};