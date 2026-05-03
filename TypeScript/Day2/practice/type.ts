// let employee:{
//     id:number, 
//     name:string
// } = {
//     id:1,
//     name:"aryan"
// }
// console.log(employee.id);

type Employee = {
    id: number,
    name: string
}
let employee:Employee = {
    id:1,
    name:"aryan"
}
console.log(employee.id);

let employees: Employee[] = [
    {
        id: 1,
        name: "aryan"
    }
]
console.log(employees[0]);

type slip = {
    move:()=>void
}
type hit = {
    cross:()=>void
}
type technique = slip & hit;
let basic : technique = {
    move() {
        
    },
    cross() {
        
    }
}

// literals type
type quantity = 50 | 100;
let rice:quantity = 50;
type metric = 'cm' | 'inch'