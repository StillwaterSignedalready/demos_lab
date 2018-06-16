class Node{
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const insertNode = (curNode, newNode) => {
  console.log('curNode: ' + curNode.key)
  if(newNode.key < curNode.key){
    if(curNode.left === null){
      curNode.left = newNode;
    }else{
      insertNode(curNode.left, newNode);
    }
  }else{
    if(curNode.right === null){
      curNode.right = newNode;
    }else{
      insertNode(curNode.right, newNode);
    }
  }
}

const inOrderTraverseNode = (node, callback) => {
  if(node !== null){
    /** left子树 抽象为 “比Key小的数字集合” */
    inOrderTraverseNode(node.left, callback);
    callback(node.key);
    inOrderTraverseNode(node.right, callback);
  }
}

const preOrderTraverseNode = (node, callback) => {
  if(node !== null){
    /** left子树 抽象为 “比Key小的数字集合” */
    callback(node.key);
    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  }
}

const postOrderTraverseNode = (node, callback) => {
  if(node !== null){
    /** left子树 抽象为 “比Key小的数字集合” */
    postOrderTraverseNode(node.left, callback);
    postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
}

const minNode = node => {
  if(node){
    while(node && node.left !== null){
      node = node.left
    }
    return node.key // possibly
  }

  return null
}

const maxNode = node => {
  if(node){
    while(node && node.right !== null){
      node = node.right
    }
    return node.key // possibly
  }

  return null
}
const searchNode = (node, key) => {
  if(node == null) return null
  if(key < node.key){
    return searchNode(node.left, key)
  }else if(key > node.key){
    return searchNode(node.right, key)
  }else{
    console.log('node found')
    return node
  }
}

/** 寻找node的子孙节点中最小的那个 */
const findMinNode = node => {
  while(node && node.left){
    node = node.left
  }
  return node
}

/**
 * @param  { {left:Node, key: number, right:Node} } node 一般来说是根节点
 * @param  {string} key 要删除的值
 */
const removeNode = (node, key) => {
  if(node == null){
    return null
  }
  if(key < node.key){
    node.left = removeNode(node.left, key)
  }else if(key > node.key){
    node.right = removeNode(node.right, key)
  }else{ // 此时 node就是要删除的节点
    // node是叶节点
    if(!node.left && !node.right){
      node = null;
      /** 这里返回的null会赋值给上面两行的父节点的left或right */
      return node
    }
    // node有一个子节点
    if(!node.left){
      return node.right
    }else if(!node.right){
      return node.left
    }
    // node有两个子节点
    let aux = findMinNode(node.right); // 也可以找left中最大的那个子节点
    node.key = aux.key;
    node.right = removeNode(node.right, aux.key);
    return node

  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(key){
    // console.log('==============>' + key);
    const newNode = new Node(key);
    if(this.root === null){
      this.root = newNode
    }else{
      insertNode(this.root, newNode)
    }
  }
  inOrderTraverse(callback){
    inOrderTraverseNode(this.root, callback)
  }
  preOrderTraverse(callback){
    preOrderTraverseNode(this.root, callback)
  }
  postOrderTraverse(callback){
    postOrderTraverseNode(this.root, callback)
  }

  min(){
    return minNode(this.root)
  }
  max(){
    return maxNode(this.root)
  }

  search(key){
    return searchNode(this.root, key)
  }

  remove(key){
    this.root = removeNode(this.root, key)
  }

}

var tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

// tree.preOrderTraverse(key => console.log(key))
// tree.inOrderTraverse(key => console.log(key))
// tree.postOrderTraverse(key => console.log(key))

// console.log(tree.min())
// console.log(tree.max())

console.log(tree.search(3))