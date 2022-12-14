let image=document.getElementById("slideimg");
  function one(){
    image.src="/limitedtimesaving.png";
  }
  function two(){
    image.src="/last-time-gift.png";
  }
  setInterval(one,2000);
  setInterval(two,4000);