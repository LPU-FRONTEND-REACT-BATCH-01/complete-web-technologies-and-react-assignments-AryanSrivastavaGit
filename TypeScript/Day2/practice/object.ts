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


interface UserDetails {
    id: number,
    name: string
}
let users: UserDetails = {
    id: 1,
    name: "aryan"
}
console.log(users);