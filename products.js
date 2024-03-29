let products=document.getElementById("product-container");
let fechdata=[];
fetch("https://63987ef4044fa481d69fb790.mockapi.io/products")
.then((response) =>{
    return response.json();
})
.then((acctualdata) =>{
    fechdata=acctualdata;
    displayproduct(acctualdata);
})
.catch((error) =>{
    console.log(error);
})
function displayproduct(data) {
    products.innerHTML=null;
    data.forEach((element) =>{
        let card=document.createElement("div");
        card.setAttribute("id","card");
        let img=document.createElement("img");
        img.setAttribute("src",element.avatar);
        let name=document.createElement("h4");
        name.innerText=element.name;
        let price=document.createElement("h5");
        price.innerText=element.proce;
        let category=document.createElement("h6");
        category.innerText=element.category;
        let description=document.createElement("p");
        description.innerText=element.description;
        let addbag=document.createElement("button");
        addbag.innerText="Add To Bag";
        addbag.addEventListener("click",() =>{
            let bagdata=JSON.parse(localStorage.getItem("bag"));
            if (bagdata===null) bagdata=[];
            let alreadybag=false;
            for (let a=0; a<bagdata.length; a++) {
                if (bagdata[a].id===element.id) {
                    alreadybag=true;
                    break;
                }
            }
            if (alreadybag===true) {
                alert("Already in Bag!");
            } else {
                bagdata.push({...element,"quantity":1});
                localStorage.setItem("bag",JSON.stringify(bagdata));
                alert("Added to Bag!");
            }
        })
        card.append(img,name,price,category,description,addbag);
        products.append(card);
    })
}