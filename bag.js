let Bag=document.getElementById("Bag");
let bagdata=JSON.parse(localStorage.getItem("bag"));
let total=document.getElementById("total");
if (bagdata===null) bagdata=[];
displayproduct(bagdata);
function displayproduct(data) {
    Bag.innerHTML=null;
    data.forEach((element,index) =>{
        let card=document.createElement("div");
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
        let increment=document.createElement("button");
        increment.innerText="+";
        increment.addEventListener("click",()=>{
            element.quantity++;
            quantity.innerText++;
            Sum();
        })
        let quantity=document.createElement("span");
        quantity.innerText=element.quantity;
        let decrement=document.createElement("button");
        decrement.innerText="-";
        decrement.addEventListener("click",() =>{
            if (quantity.innerText==1) {
                return false;
            } else {
                element.quantity--;
                quantity.innerText--;
                Sum();
            }
        })
        let remove=document.createElement("button");
        remove.innerText="Remove";
        remove.addEventListener("click",() =>{
            bagdata.splice(index,1);
            localStorage.setItem("bag",JSON.stringify(bagdata));
            displayproduct(data);
            Sum();
        })
        card.append(img,name,price,description,increment,quantity,decrement,remove);
        Bag.append(card);
    });
}
function Sum(){
    let totalprice=0;
    bagdata.forEach((element) =>{
        totalprice+=(element.quantity)*(+element.proce);
    })
    total.innerText=totalprice;
}
Sum();