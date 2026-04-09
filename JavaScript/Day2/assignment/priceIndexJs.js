let price = Number(prompt("Enter price: "));

let totalAmount = function(price, calculate){
    return calculate(price);
}

let calculate = function(price){
    if(price>=2000 && price<6000){
        return price - (price*0.15);
    }else if(price >= 6000){
        return price - (price*0.25);
    }else{
        return "No offer";
    }
}

console.log(totalAmount(price, calculate));