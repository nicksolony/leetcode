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
    
    function height(root) {   
        return !root ? 0 : 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
    };

    if (!root) {
        return true;
    };
        
    lsub = height(root.left);
    rsub = height(root.right);
    if(Math.abs(lsub-rsub)<=1 && isBalanced(root.left) && isBalanced(root.right)) {
        return true;
    };

    return false;

};