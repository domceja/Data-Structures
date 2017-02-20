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
 
 
/*Linked List*/
// Linear data structure
// represented by pointer to the first node of linked list; first node is called head, if empty value of head is null
// last element will always point to NULL
// Pros: provide ability for dynamic size and ease of insertion and deletion
// Cons: no random access, no cache locality, extra memory space for pointer of each elemenet
function LinkedList() {
    this.head = new Node(null, null);
    this.length = 0;
}
 
/*
    Add newe node to end of linked list
*/
LinkedList.prototype.addNode = function (data) {
    if (this.head.data === null) {
        this.head = new Node(data, null);
    } else {
        var cur = this.head;
        while (cur.getNext() != null) {
            cur = cur.getNext();
        }
        var node = new Node(data, null);
        cur.setNext(node);
    }
    this.length += 1;
}
 
/*
    Count all nodes in linked list
*/
LinkedList.prototype.countNodes = function () {
    if (this.head === null) {
        return 0;
    } else {
        var curr = this.head;
        var count = 0;
        while (curr !== null) {
            curr = curr.getNext();
            count +=1;
        }
        return count;
    }
}
 
/*
    Print all nodes in linked list
*/
LinkedList.prototype.printNodes = function () {
    if (this.head === null) {
        console.log("There are no nodes to display");
    } else {
        var curr = this.head;
 
        while (curr !== null) {
            console.log("Node", curr.data);
            curr = curr.getNext();
        }
    }
}
 
/*
    Reverse all nodes in linked list so last node becomes the first node
*/
LinkedList.prototype.reverseList = function () {
    if (this.head === null || this.head.getNext() === null) {
        return;
    }
 
    var prev = null;
    var curr = this.head;
    while (curr !== null) {
        var next = curr.getNext();
        curr.setNext(prev);
        prev = curr;
        curr = next;
    }
 
    this.head = prev;
}
 
 
var ll = new LinkedList();
ll.addNode(5);
ll.addNode(7);
ll.addNode(1);
ll.printNodes();
console.log(ll.countNodes());