console.log("opt queue")
class Queue{
    constructor(){
        this.lists={}
        this.rear=0;
        this.front=0
    }
    enqueue(element){
        this.lists[this.rear]=element
        this.rear++
    }
    dequeue(){
        const item = this.lists[this.front]
        delete this.lists[this.front]
        this.front++
        
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    peek(){
        console.log(this.lists[this.front])
    }
    size(){
        console.log(this.rear-this.front)
    }
    print(){
        console.log(this.lists)
    }
}

const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.print()
queue.peek()
queue.size()
