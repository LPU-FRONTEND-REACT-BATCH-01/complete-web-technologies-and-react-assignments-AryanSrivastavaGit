type paymentMethods = "UPI" | "COD" | "NetBanking" | "Card"

function payment(modeOfPayment:paymentMethods){
    return modeOfPayment;
}

function discount(mode:string, price:number): string | number{
    if(mode==="UPI"){
        return price*0.10;
    }else if(mode==="COD"){
        return price+50;
    }else if(mode==="NetBanking"){
        return price;
    }else if(mode==="Card"){
        return price*0.05;
    }else{
        return "Choose a correct mode of payment."
    }
}

console.log(discount(payment("COD"), 1000));