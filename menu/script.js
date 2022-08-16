//selectors
let all =document.querySelector(".all")
let brkfst =document.querySelector(".brkfst")
let lunch =document.querySelector(".lunch")
let snacks =document.querySelector(".snacks")
let dinner =document.querySelector(".dinner")

let brkfstBox =document.querySelector(".brkfstBox")
let lunchBox =document.querySelector(".lunchBox")
let snacksBox =document.querySelector(".snacksBox")
let dinnerBox =document.querySelector(".dinnerBox")

all.addEventListener("click", function (){
    brkfstBox.style.display = "flex";
    lunchBox.style.display = "flex"
    snacksBox.style.display = "flex"
    dinnerBox.style.display = "flex"

})


brkfst.addEventListener("click", function (){
    brkfstBox.style.display = "flex";
    lunchBox.style.display = "none"
    snacksBox.style.display = "none"
    dinnerBox.style.display = "none"
})


lunch.addEventListener("click", function (){
    brkfstBox.style.display = "none";
    lunchBox.style.display = "flex"
    snacksBox.style.display = "none"
    dinnerBox.style.display = "none"
})

snacks.addEventListener("click", function (){
    brkfstBox.style.display = "none";
    lunchBox.style.display = "none"
    snacksBox.style.display = "flex"
    dinnerBox.style.display = "none"
})

dinner.addEventListener("click", function (){
    brkfstBox.style.display = "none";
    lunchBox.style.display = "none"
    snacksBox.style.display = "none"
    dinnerBox.style.display = "flex"
})