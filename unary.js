function dream(dreamName) {
    return dreamName
}


console.log(dream('being rich man '));


const greet=(name)=> ` hello ${name}`

let callGreet=greet('Jobayer')

console.log(callGreet);








const add5 = x => x + 5;
const multiply3 = x => x * 3;
const square = x => x * x;


// Function composition
const compose = (...fns) => console.log(fns);

// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const transform = compose(square, multiply3, add5);
// console.log(transform(2)); // ((2 + 5) * 3) ^ 2 = 441

