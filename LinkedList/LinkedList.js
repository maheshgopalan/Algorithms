class Node{
    constructor(element)
    {
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    add(element)
    {
        let newNode = new Node(element);

        let current = this.head;

        if(current == null){
            this.head = newNode;
        }
        else{ 
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
         
        this.size++;
    }

    printList() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    } 


    reverse(node)
    {
        if(node == null)
            return null;
        
        if(node.next == null)
        {
            this.head = node;
            return node;
        }

        let node1 = this.reverse(node.next);
        node1.next = node;
        node.next = null;
        return node;    
    }

    reverselist()
    {
        this.reverse(this.head);
    }

    reverselist1()
    {
        let current = this.head;
        let next1 = null, prev1 = null;
        while(current != null)
        {
            next1 = current.next;
            current.next = prev1;
            prev1 = current;
            current = next1;
        }
        this.head = prev1;
    }
}

let l1 = new LinkedList();

l1.add(10);
l1.add(15);
l1.add(20);
l1.add(25);
l1.add(30);
l1.add(35);
l1.add(40);
l1.add(45);
l1.add(50);

l1.printList();

l1.reverselist();

l1.printList();

l1.reverselist1();

l1.printList();