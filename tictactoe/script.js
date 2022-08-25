//selectors

let music = new Audio("music.mp3")
let turn_audio = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
// let isgameover = false
// function changing turn value

function changeTurn(){
    if(turn === "X"){
        return "0"
    }else{
        return "X"
    }
}
function checkWin(){

}

// main logic


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turn_audio.play();
            checkWin();
            // if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            // } 
        }
    })
})
