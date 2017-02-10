/*Tree Node */
// has maximun of two children

function TreeNode(data){
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
}


// Helper methods
TreeNode.prototype.getData = function() {
    return this.data;
}

TreeNode.prototype.getLeftChild = function() {
    return this.leftChild;
}

TreeNode.prototype.setLeftChild = function(leftChild){
    this.leftChild = leftChild;
}

TreeNode.prototype.getRightChild = function() {
    return this.rightChild;
}

TreeNode.prototype.setRightChild = function(rightChild){
    this.rightChild = rightChild;
}