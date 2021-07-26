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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    
    if (!root) {
        return true;
    };
        
    lsub = checkBalance (root.left);
    rsub = checkBalance (root.right);
    if(Math.abs(lsub-rsub)<=1 && checkBalance(lsub) && checkBalance(rsub)) {
        return true;
    };

    return false;

};