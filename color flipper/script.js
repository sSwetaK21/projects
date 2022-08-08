// let count = 0;


let colors = document.querySelector(".color_c")
let btns = document.querySelectorAll(".btn")


btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let seter = e.currentTarget.classList;
        let hexcode = "#" ;
        let randomNum = "";
        if (seter.contains("Generate")) {
             randomNum += Math.floor(Math.random() * 16777215)
             hexcode +=   randomNum.toString(16);
            document.body.style.backgroundColor = hexcode;
            colors.innerText = hexcode;
        }
        if(seter.contains("Copy")){
            navigator.clipboard.writeText(hexcode)
        }
    })
})