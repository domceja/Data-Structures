/*Node*/
    // consist of two properties: data, pointer to next node
 
function Node(data, next) {
    this.data = data;
    this.next = next;
}
 
Node.prototype.getNext = function () {
    return this.next;
}
 
Node.prototype.setNext = function (next) {
    this.next = next;
}
 
Node.prototype.getData = function () {
    return this.data;
}

Node.prototype.setData = function(data){
    this.data = data;
} 

/*Stack*/
// Linear data structure 
// LIFO (Last In First Out) Operations 
// Three Operations: push(), pop(), peek()
// Implemented using Linked List over Array due to ability to grow over run time but exta memory for pointers
function Stack(){
    this.top = null;
    this.size = 0;
}

Stack.prototype.push = function(data){
    var ele = new Node(data, top);
    top = ele;
    this.size++;
}

Stack.prototype.pop = function() {
    var data = this.top.getData();
    top = this.top.getNext();

}

Stack.prototype.peek = function() {
    return this.top.getData();
}

Stack.prototype.getSize = function() {
    return this.size;
}

Stack.prototype.isEmpty = function() {
    return this.size === 0;
}