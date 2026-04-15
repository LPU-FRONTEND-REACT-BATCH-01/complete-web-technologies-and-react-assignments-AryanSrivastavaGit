let obj:{id:number, name:string} = {
    id:1,
    name:"aryan"
}

console.log(obj.id);


interface UserDetails{
    id:number,
    name:string
    // display:()=>void
}

// class users implements UserDetails{
//     id=1;
//     name="aryan";
//     display=() => {
//         console.log(this.id, this.name);
//     };
// }

let users:UserDetails={
    id:1,
    name:"aryan"
}

console.log(users);