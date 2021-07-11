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
 * @return {number}
 */
 var maxDepth = function(root) {
    let depth = 0;

    function branchDepth(depth,root) {
        if(root.val) {
            depth = depth +1;
            if(root.left) {
               branchDepth(depth,root.left)
            } else {
                branchDepth(depth,root.right)
            }
        }
        return depth;
    }
};