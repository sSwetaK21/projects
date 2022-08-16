let togglebtn = document.querySelector(".side_toggle")
let closebtn =document.querySelector(".closebtn")
let asidebar = document.querySelector(".aside_bar")

togglebtn.addEventListener("click", function (){
    asidebar.classList.toggle("show-sidebar")
})

closebtn.addEventListener("click", function (){
    asidebar.classList.remove("show-sidebar")

})