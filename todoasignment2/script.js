//selectors

let createBtn =document.querySelector(".createbtn")
let cont = document.querySelector(".container")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")
let black = document.querySelector(".black")



createBtn.addEventListener("click", function(){
    let modal_content = document.createElement("div");
    modal_content.classList.add("modal_content")
    let txtarea = document.createElement("textarea");
    txtarea.classList.add("txtarea")

    let colorsbtn = document.createElement("div");
    colorsbtn.classList.add("colorsbtn")


    let redbtn = document.createElement("button")
    colorsbtn.append(redbtn)
    redbtn.style.backgroundColor="red"
    redbtn.classList.add("redbtn")


    let greenbtn = document.createElement("button")
    colorsbtn.append(greenbtn)
    greenbtn.style.backgroundColor="green"
    greenbtn.classList.add("greenbtn")


    let bluebtn = document.createElement("button")
    colorsbtn.append(bluebtn)
    bluebtn.style.backgroundColor="blue"

    bluebtn.classList.add("bluebtn")


    let blackbtn = document.createElement("button")
    colorsbtn.append(blackbtn)
    blackbtn.style.backgroundColor="black"

    blackbtn.classList.add("blackbtn")


    let closebtn = document.createElement("button")
    closebtn.innerText = "x"
    closebtn.classList.add("closebtn")


    let submitbtn = document.createElement("button")
    submitbtn.innerText = "Submit"
    submitbtn.classList.add("submitbtn")


    
    modal_content.appendChild(txtarea)
    modal_content.append(colorsbtn)
    modal_content.append(closebtn)
    modal_content.append(submitbtn)

    cont.append(modal_content)


})

closebtn.addEventListener("click", function(){
    closebtn.parentElement.remove();
})

submitbtn.addEventListener("click", function(){

    inputtxt.setAttribute("readonly", "readonly")
})