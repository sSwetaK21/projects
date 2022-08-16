//selectors

let togglebtn = document.querySelector(".toggle")
let links = document.querySelector(".nav_links")

togglebtn.addEventListener("click", function (){
    links.classList.toggle("nav_show")
})