let firstname=document.getElementById("firstname");
let lastname=document.getElementById("lastname");

let password=document.getElementById("password");
let LSdata=JSON.parse(localStorage.getItem("Useremail")) || [];
LSdata.forEach((element) =>{
    let email=document.getElementById("emailid");
    email.innerText=element.Useremail;
})
let button=document.getElementById("button");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    let obj={
    firstname:firstname.value,
    lastname:lastname.value,
    email:email.innerText,
    password:password.value,
    };
    let accountdata=JSON.parse(localStorage.getItem("account-data"));
    if(accountdata==null) accountdata=[];
    accountdata.push(obj);
    localStorage.setItem("account-data",JSON.stringify(accountdata));
    
});