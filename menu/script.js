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
    brkfstBox.style.display = "inline-block";
    lunchBox.style.display = "inline-block"
    snacksBox.style.display = "inline-block"
    dinnerBox.style.display = "inline-block"

})


brkfst.addEventListener("click", function (){
    brkfstBox.style.display = "block";
    lunchBox.style.display = "none"
    snacksBox.style.display = "none"
    dinnerBox.style.display = "none"
})


lunch.addEventListener("click", function (){
    brkfstBox.style.display = "none";
    lunchBox.style.display = "inline-block"
    snacksBox.style.display = "none"
    dinnerBox.style.display = "none"
})

snacks.addEventListener("click", function (){
    brkfstBox.style.display = "none";
    lunchBox.style.display = "none"
    snacksBox.style.display = "inline-block"
    dinnerBox.style.display = "none"
})

dinner.addEventListener("click", function (){
    brkfstBox.style.display = "none";
    lunchBox.style.display = "none"
    snacksBox.style.display = "none"
    dinnerBox.style.display = "inline-block"
})