console.log("hello q2")
class Queue{
    constructor(){
        this.lists=[]
    }
    enqueue(element){
        return this.lists.push(element)
    }
    dequeue(){
        return this.lists.shift();
    }
    peek(){
        console.log(this.lists[0])
    }
    isEmpty(){
        return this.lists.length ===0
    }
    size(){
        if(!this.isEmpty()){
            console.log( ` your queue size is ${this.lists.length}`)
        }else{
            console.log("Queue is empty")
        }
    }
    print(){
        console.log(this.lists)
    }
}
const queue= new Queue()
queue.size()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.peek()
queue.print()
queue.size()
queue.dequeue()
queue.print()
queue.peek()
queue.size()

