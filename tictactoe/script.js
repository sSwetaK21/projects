//selectors

let music = new Audio("music.mp3")
let turn_audio = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false
// function changing turn value

function changeTurn(){
    if(turn === "X"){
        return "0"
    }else{
        return "X"
    }
}


// main logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e=>{
    let boxtext = e.querySelector(".boxtext");
    e.addEventListener("click", ()=>{
        if(boxtext === ""){
            boxtext.innerText = turn
            turn =changeTurn()
            turn_audio.play()
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})