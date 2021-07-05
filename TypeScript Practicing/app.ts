function Logger(logString : string){
    return function(constructor: Function){
    console.log(logString);
    console.log(constructor);
    }
}
@Logger('Loggin - Person')
class Person1 {

 name = 'Max';
constructor(){
    console.log('Creating person object...');
}
}
const per = new Person1();
console.log(per);