let products=document.getElementById("products");
let fechdata=[];
fetch("https://63987ef4044fa481d69fb790.mockapi.io/products")
.then((respons) =>{
    return respons.json();
})
.then((acctualdata) =>{
    fechdata=acctualdata.data;
    dis
})