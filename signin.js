let form=document.getElementById("signin");
let email=document.getElementById("email");
let button=document.getElementById("nextbtn");
button.addEventListener("click",() =>{
let LSdata=JSON.parse(localStorage.getItem("UserEmail")) || [];
let obj={Useremail: form.email.value};
   LSdata.push(obj);
   localStorage.setItem("UserEmail",JSON.stringify(LSdata));
   window.open("/signup.html");
});
