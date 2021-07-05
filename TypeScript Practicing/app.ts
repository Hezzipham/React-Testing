const names: Array<string|number> =['Max', 'Manuel'];
const promise: Promise<sting> = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve('this is done');
    }, 3000)
});
promise.then(data => {
    data.split(' ');
})