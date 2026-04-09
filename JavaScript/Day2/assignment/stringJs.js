let username = prompt("Enter name: ");
let email = prompt("Enter email: ");
let password = prompt("Enter password: ");

let check = function (username, email, password){
    username = username.trim().toLowerCase();
    
    let emailArr =  email.toLowerCase().split("@");

    let msg;
    if(password.length>8 && password.include('@', '*', '/')){
        msg = "Your password is strong";
    }else{
        msg = "Your password is not strong";
    }

    return username +" " + emailArr[0] + " " + emailArr[1] + " " + msg;
}

console.log(check(username, email, password));