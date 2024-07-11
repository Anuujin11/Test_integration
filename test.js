const burgerMenu = document.querySelector("#img-burger-menu");
const nav = document.querySelector("nav");
/*console.log(burgerMenu);*/
burgerMenu.addEventListener("click", (event) => {
 if(nav.style.display==="block"){
    nav.style.display = "none";
 }else{
    nav.style.display = "block";
 }
});

