
// initial value

let count =0;

//selectors

let value = document.querySelector(".value")
let buttons = document.querySelectorAll(".buttons")

buttons.forEach(function (btn){
    btn.addEventListener("click", function (event) {
        let setvalue = event.target.classList;
        if(setvalue.contains("Decrease")){
            count--;
        } 
         if(setvalue.contains("Increase")){
            count++;
        }
        if(setvalue.contains("Reset")){
            count = 0
        }

        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count === 0){
            value.style.color = "white"
        }

        value.textContent = count
    })
})