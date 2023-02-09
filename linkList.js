// Random access is not fesible 
// insertion at begining deleate and search
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList {
    constructor(){
        this.head=null; 
        this.size=0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head= node
        }else{
            node.next=this.head //doubt
            
            this.head=node
        }
        this.size++
    }
    append(value){
        const node = new Node(value);
        if (this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next=node
        }
        this.size++
    }
    insert(value,index){
        if(index<0 || index>this.size){
        return "please ebter vaild"
    }if(index === 0){
        this.prepend(value)
    }else{
        const node = new Node(value)
        let prev=this.head
        for (let i=0 ; i<index-1;i++){
            prev=prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
    }

    }
    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let curr=this.head
            let listVlaue =" "
            while(curr){
                listVlaue+=`${ curr.value }`
                curr=curr.next
            }
            console.log(listVlaue)
        }
    }
}

const list =new LinkedList()
console.log("list is empty?",list.isEmpty())
console.log("list size",list.getSize())
list.print()
list.insert(10,0)
list.print()
list.insert(20,1)
list.insert(30,2)
list.print()