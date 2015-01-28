var Node = function(value){
 this.value = value;
};

Node.prototype.insert = function(value){
 var nodeValue = this.value;
 if(value > nodeValue){
   if(this.right){
     return this.right.insert(value);
   }
   else{
     this.right = new Node(value);
     return this.right;
   }
 }
 else if(value < nodeValue){
   if(this.left){
     return this.left.insert(value);
   }
   else{
     this.left = new Node(value);
     return this.left;
   }
 }
};

var BinaryTree = function(value){
 this.root = new Node(value);
};

BinaryTree.prototype.insert = function(value){
 var node = this.root;
 node = node.insert(value);
};

BinaryTree.prototype.search = function(value){
 var node = this.root;
 while(node){
   var nodeValue = node.value;
   if(value > nodeValue){
     node = node.right;
   }
   else if(value < nodeValue){
     node = node.left;
   }
   else{
     return true;
   }
   if(!node){
     return false;
   }
 }
};

BinaryTree.prototype.traverse = function(tree) { //need to modify traverse to use this instead of sending tree back in
  var inOrder = function(node) {
    if (node) {

      //traverse the left subtree
      if (node.left !== null) {
        inOrder(node.left);
      }

      //callback on this node
      // cb.call(this, node);
      console.log(node.value);

      //traverse the right subtree
      if (node.right !== null) {
        inOrder(node.right);
      }
    }
  };
  //start with the root
  inOrder(tree.root);
};

var tree = new BinaryTree(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(17);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(8);
tree.insert(11);
tree.insert(13);
tree.insert(16);
tree.insert(18);
tree.traverse(tree);