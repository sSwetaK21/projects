//Selectors

let resDisplay = document.getElementById("result_display")
let compDisplay = document.querySelector(".comp_display")
let userDisplay = document.querySelector(".user_display")

let possibleChoices = document.querySelectorAll("img")
let user
let comp
let res

possibleChoices.forEach(imgChoice => imgChoice.addEventListener("click", (e)=>{
  user = e.target.id
  userDisplay.innerHTML =user
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3) + 1 
  if(randomNumber === 1){
    comp = "rock"
  }
  if(randomNumber === 2){
    comp = "paper"
  }
  if(randomNumber === 3){
    comp = "scissors"
  }

  compDisplay.innerHTML = comp

}

function getResult(){
  if(comp === user){
    res= "Its a Draw!"
  }

  if(comp === "rock" && user==="paper"){
    res = "You Win! "
  }

  if(comp === "paper" && user === "scissors"){
    res = "You Win!"
  }
  if(comp === "rock" && user === "scissors"){
    res = "You lose!"
  }
  if(comp === "paper" && user === "rock"){
    res = "You Lose!"
  }

  if(comp === "scissors" && user === "paper"){
    res = "You lose!"
  }
  if(comp === "scissors" && user === "rock"){
    res = "You win!"
  }

  resDisplay.innerHTML = res





}