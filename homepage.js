(function() {
  var i = 0;
  var pics = ["/limitedtimesaving.png","/last-time-gift.png"];
  var el = document.getElementById('slideimg');
  function flowimg() {
    el.src = pics[i]; 
    i = (i + 1) % pics.length;
  }
  setInterval(flowimg, 2000);
})();
(function() {
  var i = 0;
  var banners = ["/turntemp.png","/puffy boots'.png","/simplysexy.png"];
  var el = document.getElementById('flowbanner');
  function flowban() {
    el.src = banners[i]; 
    i = (i + 1) % banners.length;
  }
  setInterval(flowban, 2000);
})();


// search

let Product = document.getElementById("Product")
let button=document.getElementById("search-btn")
let search=document.getElementById("search-inp")
button.addEventListener("click",get)
function get(){
  let res= fetch(`https://63987ef4044fa481d69fb790.mockapi.io/products`);
  res.then((dom)=>{
    return dom.json();
  }) 
  .then((Data)=>{
    Database(Data.Search);
   })
  .catch((err)=>{
    dataerror();
  })
  function dataerror(){
    Product.innerHTML=null;
    let h2= document.createElement("h2")
    h2.setAttribute("class","error-container");
    h2.innerText="Product not found!"
    Product.append(h2)
  }
}
function Database(arr){
  Product.innerHTML=null;
  arr.forEach((element)=>{
    let box=document.createElement("div");
    box.setAttribute("class", "child");
    let image= document.createElement("img");
    image.setAttribute("src",element.avatar);
    image.setAttribute("class","image");
    let name= document.createElement("h4");
    name.innerText=element.name;
    name.setAttribute("class","name");
    let price=document.createElement("h5");
    price.innerText=element.proce;
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
        if (alreadybag===true) {
          alert("Added To Bag!");
        } else {
          bagdata.push({...element,quantity:1});
          localStorage.setItem("bag",JSON.stringify(bagdata));
          alert("Already in Bag!");
        }
      }
      box.append(image,name,price,description,addbag);
      Product.append(box)
    })
  })
}