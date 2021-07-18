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
        if(root.left===null && root.right ===null) {
            return sum ===targetSum
            } else if (root.left===true) {
            sum=sum+root.val
            checkTree(root.left,targetSum,sum)
            } else {
            sum=sum+root.val
            checkTree(root.right,targetSum,sum)
        }

    return checkTree(root, targetSum,0);
}

 };