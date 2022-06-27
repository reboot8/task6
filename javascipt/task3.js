
const menu=document.getElementById("menu");
const menusection=document.getElementById("menusection");
const dropdown=document.getElementById("dropdown");
const displaymenu=document.getElementById("display")


dropdown.addEventListener("click" ,function(){
    menu.classList.toggle("menunew");
    menusection.classList.toggle("menusectionnew");
    dropdown.classList.toggle("dropdownbuttonnew");
    displaymenu.classList.toggle("displaymenunew")
});