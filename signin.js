let LSdata=JSON.parse(localStorage.getItem("account-data"))
    let heading=document.getElementById("heading")
    let form2=document.getElementById("form2")
    
    form2.addEventListener("submit",(e)=>{
       e.preventDefault();
       LSdata.forEach((element,index)=>{
          if(form2.email.value==element.email){
             if(form2.password.value==element.password){
               heading.innerText="Sign in Successful"
             }
          }else{
             heading.innerText="Wrong Credentials"
          }
       })   
    })