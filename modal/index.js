//selectors

let modal = document.querySelector(".modal")
let clickbtn = document.querySelector(".clickbtn")
let closebtn = document.querySelector(".closebtn")
let submitbtn = document.querySelector(".submit")

//function

clickbtn.addEventListener("click", openmodal)
closebtn.addEventListener("click", closemodal)
submitbtn.addEventListener("click", closemodal)

function openmodal(){
    modal.style.display = "block"
}

function closemodal(){
    modal.style.display = "none"
}
