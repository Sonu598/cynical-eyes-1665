let LSdata=JSON.parse(localStorage.getItem("account-data"))
let heading=document.getElementById("alert")
let button=document.getElementById("button")
let email=document.getElementById("email");
let password=document.getElementById("password");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    LSdata.forEach((element,index)=>{
        if(email.value==element.email){
            if(password.value==element.password){
               heading.innerText="Sign in Successful";
               window.open("/product.html");
            }else{
                heading.innerText="Wrong Password";
            }
        }else{
            heading.innerText="Email Not Found";
        }
    })   
});