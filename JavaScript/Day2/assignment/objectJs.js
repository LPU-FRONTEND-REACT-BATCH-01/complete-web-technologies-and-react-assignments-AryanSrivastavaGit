let username = prompt("Enter name: ");
let age = prompt("Enter age: ");

let display = function(username, age){
    return {
        username : username,
        age : age
    }
}

console.log(display(username, age));