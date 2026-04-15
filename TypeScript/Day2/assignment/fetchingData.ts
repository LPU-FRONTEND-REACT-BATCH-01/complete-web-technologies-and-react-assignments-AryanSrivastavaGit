async function prodData() {
    try{
        let data = await fetch("https://dummyjson.com/products");
        if(data.ok){
            let dataJson = await data.json();
            console.log(filterPrice5(dataJson.products));
            console.log(filterPrice10(dataJson.products));
            console.log(sortingA(dataJson.products));
            console.log(sortingD(dataJson.products));
        }
    }catch(e){
        console.log(e);
    }
}
function filterPrice5(data:any){
    return data.filter((x:any)=>x.price>5 && x.price<10)
}
function filterPrice10(data:any){
    return data.filter((x:any)=>x.price>10)
}
function sortingA(data:any){
    let dataClone1 = structuredClone(data);
    return dataClone1.sort((a:any, b:any) => a.title.localeCompare(b.title));
}
function sortingD(data:any){
    let dataClone2 = structuredClone(data);
    return dataClone2.sort((a:any, b:any) => b.title.localeCompare(a.title));
}
prodData();