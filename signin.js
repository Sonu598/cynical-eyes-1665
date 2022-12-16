let form=document.getElementById("signin");
let email=document.getElementById("email");
let button=document.getElementById("nextbtn");
let LSdata=JSON.parse(localStorage.getItem("UserEmail")) || [];
let obj={Useremail: form.email.value};
button.addEventListener("click",() =>{
   LSdata.push(obj);
   localStorage.setItem("UserEmail",JSON.stringify(LSdata));
})
