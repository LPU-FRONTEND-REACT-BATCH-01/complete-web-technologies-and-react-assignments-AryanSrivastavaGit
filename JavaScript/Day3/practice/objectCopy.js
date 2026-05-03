// let original = {
//     id:1,
//     uname:"aryan"
// }

// let duplicate1 = original;
// original.uname="kumar";
// console.log(original)
// console.log(duplicate1)

// let duplicate2 = structuredClone(original);
// duplicate2.uname="kumar";
// console.log(original)
// console.log(duplicate2)

// let duplicate3 = {...original};
// duplicate3.uname="aryanKumar";
// console.log(original)
// console.log(duplicate3)


let cart = [
    {id:1, prod:"watch"}, 
    {id:2, prod:"shoes"},
    20
];

let cartDup1 = structuredClone(cart);  //deep copy
cartDup1[0].prod="shirt";
cartDup1[2] = 30;
console.log(cart);
console.log(cartDup1);

let cartDup2 = [...cart];  // shallow copy
cartDup2[0].prod="t-shirt";
cartDup2[2] = 30;
console.log(cart);
console.log(cartDup2);