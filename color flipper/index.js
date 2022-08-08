//selectors

// let genBtn = document.getElementsByClassName("gen");
// let copybtn = document.getElementsByClassName("copy")
let colors = document.querySelector(".color_c")
let genBtn = document.querySelector(".gen")
let copyBtn = document.querySelector(".copy")


//function

function colorCode(){
    let randomNum = Math.floor(Math.random() * 16777215 )
    let hexcode = "#" + randomNum.toString(16);
    document.body.style.backgroundColor = hexcode;
    colors.innerText = hexcode;
}

genBtn.addEventListener("click", colorCode)

