let arr = [12, 'aryan', true, undefined, 0.7]
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift(12));
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.push(0.7));
console.log(arr);


let greet = ["hi", "hello", "bye"];
greet.map((value,index,arr)=>{
    console.log(`${value} | ${index} | ${arr}`);
});
console.log("----------------------------------------------")

greet.filter((value, index, arr) => {
    console.log(`${value} | ${index} | ${arr}`);
});
console.log("----------------------------------------------")

greet.reduce((pre, cur, index, arr) => {
    console.log(`${pre} | ${cur} | ${index} | ${arr}`)
},"A");
console.log("----------------------------------------------")



const numbers1 = [1, 2, 3];
const doubled = numbers1.map(num => num * 2); // [2, 4, 6]
console.log(doubled);

const numbers2 = [1, 2, 3, 4];
const evens = numbers2.filter(num => num % 2 === 0); // [2, 4]
console.log(evens);

const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce((acc, curr) => acc + curr, 0); // 10
console.log(sum);


let userCart = [
    {
        id : 1,
        name: "tshirt",
        price : 599
    },
    {
        id : 1,
        name: "tshirt",
        price : 599
    },
    {
        id : 1,
        name: "tshirt",
        price : 599
    }
]

let cartSum = userCart.reduce((x,y) => x + y.price, 0);
console.log(cartSum);