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
        
    lsub = isBalanced (root.left);
    rsub = isBalanced (root.right);
    if(Math.abs(lsub-rsub)<=1 && isBalanced(root.left) && isBalanced(root.right)) {
        return true;
    };

    return false;

};