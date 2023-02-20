//Queue works on the FIFO(First in First Out) principle. 
//Hence, it performs two basic operations which are the addition of elements at the end of the queue and the removal of elements from the front of the queue.

//To implement a queue data structure we need the following methods:

// enqueue : To add elements at end of the queue.
// dequeue: To remove an element from the front of the queue.
// peek: To get the front element without removing it.
// isEmpty: To check whether an element is present in the queue or not.
// printQueue: To print the elements present in queue.
class Queue{
    constructor(){
        this.items ={};
        this.frontIndex =0;
        this.backindex =0;
    }
    enqueue(item){
        this.items[this.backindex] =item;
        this.backindex++
        return item + 'inserted'
    }
    dequeue(){
        const item = this.items[this.frontIndex]
            delete this.items[this.frontIndex]
            this.frontIndex++
            return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
}
const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.peek()) 
var str = queue.printQueue;
console.log(str) 

