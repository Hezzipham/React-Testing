interface Person {
    name: String;
    age: number;
    greet(phrase: string): void;
}

class Personclass {
    name: string;
    age: number;
    constructor (n:string, a: number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string){
        console.log(phrase + ' ' + this.name + ' ' + this.age + ' years old!')
    }
}
let user1: Person;

user1 = new Personclass('max', 18);
user1.greet('Hi there');
console.log(user1);
