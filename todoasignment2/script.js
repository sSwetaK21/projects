//selectors

let createBtn =document.querySelector(".createbtn")
let cont = document.querySelector(".container")

createBtn.addEventListener("click", function(){
    let modal_content = document.createElement("div");
    modal_content.classList.add("modal_content")
    let inputtxt = document.createElement("input");
    inputtxt.classList.add("inputtxt")

    let colorsbtn = document.createElement("div");
    colorsbtn.classList.add("colorsbtn")


    let redbtn = document.createElement("button")
    colorsbtn.append(redbtn)
    redbtn.classList.add("redbtn")


    let greenbtn = document.createElement("button")
    colorsbtn.append(greenbtn)
    greenbtn.classList.add("greenbtn")


    let bluebtn = document.createElement("button")
    colorsbtn.append(bluebtn)
    bluebtn.classList.add("bluebtn")


    let blackbtn = document.createElement("button")
    colorsbtn.append(blackbtn)
    blackbtn.classList.add("blackbtn")


    let closebtn = document.createElement("button")
    closebtn.innerText = "x"
    closebtn.classList.add("closebtn")


    let submitbtn = document.createElement("button")
    submitbtn.innerText = "Submit"
    submitbtn.classList.add("submitbtn")


    
    modal_content.appendChild(inputtxt)
    modal_content.append(colorsbtn)
    modal_content.append(closebtn)
    modal_content.append(submitbtn)

    cont.append(modal_content)

    

})