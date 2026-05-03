let userData = {
    id:"1",
    username:"aryan",
    "age":23
}

console.log(Object.keys(userData));
console.log(Object.values(userData));
console.log(Object.entries(userData));

console.log(userData.id);
console.log(userData.username);
console.log(userData.age);
console.log(userData["id"]);
console.log(userData["age"]);


Object.seal(userData);
Object.freeze(userData);