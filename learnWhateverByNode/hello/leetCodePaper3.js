/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    /** root 开始 每下一层就 * 2 * 2 */
    let result = 0;
    const numbers = [];
    function addDigit(node, sum) {
        // const layerCount = count + 1;
        console.log('addDigit')
        // sum * 2 + addDigit()
        /** 一个分支，两个分支，没有分支 */
        if (node.left && node.right) {
            return addDigit(node.left, sum * 2 + node.val) + addDigit(node.left, sum * 2 + node.val);
        } else if (node.left || node.right) {

            numbers.push(sum * 2 + );
        } else {
            numbers.push(sum * 2);
        } 
        // else { // 下一个是 叶节点
        //     const ;
        //     numbers.push(sum * 2 + node.val);
        // }
    }
    addDigit(root, 0)
    console.log(numbers)


};

const root = {
    val: 1,
    left: new TreeNode(1),
    right: new TreeNode(1),
}

// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(2);

// root.right.left = new TreeNode(1);
// root.left.right = new TreeNode(2);
console.log(sumRootToLeaf(root))