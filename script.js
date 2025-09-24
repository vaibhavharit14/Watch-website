const menuOpenButton =  document.querySelector(".menu-button-open");
const menuCloseButton =  document.querySelector(".menu-button-close");

menuOpenButton.addEventListener("click", ()=>{
    document.body.classList.add("show-mobile-menu")
})

menuCloseButton.addEventListener("click", ()=>{
    document.body.classList.remove("show-mobile-menu")
})

