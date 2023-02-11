console.log("hello tree")
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySeachTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
      const newNode= new Node(value)   
      if(this.isEmpty()){
        this.root=newNode
      }else{
        this.insertNode(this.root,newNode)
      }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
              this.insertNode(root.left,newNode)  
            }
        }else{
            if(root.right===null){
                root.right= newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    serach(root ,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value<root.value){
                return this.serach(root.left,value)
            }else{
                return this.serach(root.right,value)
            }
        }
    }
}
const bst = new BinarySeachTree()
console.log("tree is empty",bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)

console.log(bst.serach(bst.root,10))
console.log(bst.serach(bst.root,5))
console.log(bst.serach(bst.root,120))