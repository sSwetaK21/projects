//selectors

let music = new Audio("music.mp3")
let turn_audio = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false
let reset = document.getElementById("reset")

// function changing turn value

function changeTurn(){
    if(turn === "X"){
        // turn.style.color="red"
        // turn ="0"
        return "0"
    }else{
        return "X"
    }
}
function checkWin(){
    let boxtext2 = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        if((boxtext2[e[0]].innerText === boxtext2[e[1]].innerText)  && (boxtext2[e[2]].innerText === boxtext2[e[1]].innerText) && (boxtext2[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext2[e[0]].innerText + " Won!";
            isgameover = true;
            gameover.play()
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";

        }
    })

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
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})


//adding reset function here

reset.addEventListener("click", ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
})