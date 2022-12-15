let firstname=document.getElementById("firstname");
let lastname=document.getElementById("lastname");
let email=document.getElementById("emailaddress");
let password=document.getElementById("password");
let button=document.getElementById("button");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    let obj={
    firstname:firstname.value,
    lastname:lastname.value,
    email:email.innerText,
    password:password.value,
    };
    let LSdata=JSON.parse(localStorage.getItem("account-data"));
    if(LSdata==null) LSdata=[];
    LSdata.push(obj);
    localStorage.setItem("account-data",JSON.stringify(LSdata));
    window.open("/alreadysignup.html");
});