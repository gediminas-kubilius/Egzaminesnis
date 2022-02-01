var burger = document.getElementById('burger');
var sideMenu = document.getElementById('side-menu');

function burgerClick(){
  sideMenu.classList.toggle("translate");
  burger.classList.toggle("rotate");
  console.log("burger");
}

burger.addEventListener("click", burgerClick);



