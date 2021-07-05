"use strict";
class Personclass {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name + ' ' + this.age + ' years old!');
    }
}
let user1;
user1 = new Personclass('max', 18);
user1.greet('Hi there');
console.log(user1);
//# sourceMappingURL=interface.js.map