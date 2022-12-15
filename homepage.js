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
