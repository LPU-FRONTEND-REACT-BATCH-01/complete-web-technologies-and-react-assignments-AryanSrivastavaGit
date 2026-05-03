"use strict";
async function prodData() {
    try {
        let data = await fetch("https://dummyjson.com/products");
        if (data.ok) {
            let dataJson = await data.json();
            console.log(filterPrice5(dataJson.products));
            console.log(filterPrice10(dataJson.products));
            console.log(sortingA(dataJson.products));
            console.log(sortingD(dataJson.products));
        }
    }
    catch (e) {
        console.log(e);
    }
}
function filterPrice5(data) {
    return data.filter((x) => x.price > 5 && x.price < 10);
}
function filterPrice10(data) {
    return data.filter((x) => x.price > 10);
}
function sortingA(data) {
    let dataClone1 = structuredClone(data);
    return dataClone1.sort((a, b) => a.title.localeCompare(b.title));
}
function sortingD(data) {
    let dataClone2 = structuredClone(data);
    return dataClone2.sort((a, b) => b.title.localeCompare(a.title));
}
prodData();
