console.log("ok")
document.getElementById("menu").addEventListener("click", openMenu);
function openMenu(){
    document.getElementById("dropdown_menu").classList.toggle("active");
}
document.getElementById("menu1").addEventListener("click", openMenu1);
function openMenu1(){
    document.getElementById("dropdown_menu1").classList.toggle("active1");
}