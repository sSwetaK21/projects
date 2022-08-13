//selectors

let createBtn = document.querySelector(".createbtn")
let cont = document.querySelector(".container")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")
let black = document.querySelector(".black")



createBtn.addEventListener("click", function () {
    let modal_content = document.createElement("div");
    modal_content.classList.add("modal_content")
    let txtarea = document.createElement("textarea");
    txtarea.classList.add("txtarea")
    txtarea.setAttribute("placeholder", "Enter task here")

    let colorsbtn = document.createElement("div");
    colorsbtn.classList.add("colorsbtn")


    let redbtn = document.createElement("button")
    colorsbtn.append(redbtn)
    redbtn.style.backgroundColor = "red"
    redbtn.classList.add("redbtn")


    let greenbtn = document.createElement("button")
    colorsbtn.append(greenbtn)
    greenbtn.style.backgroundColor = "green"
    greenbtn.classList.add("greenbtn")


    let bluebtn = document.createElement("button")
    colorsbtn.append(bluebtn)
    bluebtn.style.backgroundColor = "blue"

    bluebtn.classList.add("bluebtn")


    let blackbtn = document.createElement("button")
    colorsbtn.append(blackbtn)
    blackbtn.style.backgroundColor = "black"

    blackbtn.classList.add("blackbtn")


    let closebtn = document.createElement("button")
    closebtn.innerText = "x"
    closebtn.classList.add("closebtn")


    let submitbtn = document.createElement("button")
    submitbtn.innerText = "Submit"
    submitbtn.classList.add("submitbtn")

    redbtn.addEventListener("click", function () {
        modal_content.style.backgroundColor = "red"
        txtarea.style.backgroundColor = "red"

    })

    greenbtn.addEventListener("click", function () {
        modal_content.style.backgroundColor = "green"
        txtarea.style.backgroundColor = "green"

    })

    bluebtn.addEventListener("click", function () {
        modal_content.style.backgroundColor = "blue"
        txtarea.style.backgroundColor = "blue"

    })

    blackbtn.addEventListener("click", function () {
        modal_content.style.backgroundColor = "black"
        txtarea.style.backgroundColor = "black"

    })



    modal_content.appendChild(txtarea)
    modal_content.append(colorsbtn)
    modal_content.append(closebtn)
    modal_content.append(submitbtn)

    cont.append(modal_content)

    closebtn.addEventListener("click", function (e) {
        e.target.parentElement.remove();
    })

    submitbtn.addEventListener("click", function (e) {
        // inputtxt.setAttribute("readonly", "readonly")
        e.preventDefault()

        let task = txtarea.value;
        if (task.length > 1) {
            e.target.parentElement.remove();

            let modal_sub = document.createElement("div");
            modal_sub.classList.add("modal_content")
            modal_sub.classList.add("modal_sub")

            modal_sub.style.backgroundColor = colorsbtn

            let txtarea1 = document.createElement("textarea");
            txtarea1.classList.add("txtarea")
            txtarea1.setAttribute("col", "38")
            txtarea1.setAttribute("rows", "5")
            txtarea1.setAttribute("width", "270px")
            txtarea1.setAttribute("height", "140px")



            
            let bottoms = document.createElement("div")
            bottoms.classList.add("bottoms")

            let leftIcon = document.createElement("div")
            leftIcon.classList.add("leftIcon")


            let checked = document.createElement("i")
            checked.setAttribute("class", "fa-solid fa-check")
            checked.style.color = "#00ff00"
            checked.style.display = "none"


            let editBTn = document.createElement("i")
            editBTn.setAttribute("class", "fa-solid fa-pen-to-square")
            editBTn.style.color = "white"
            editBTn.style.display = "none"



            let trash = document.createElement("i")
            trash.setAttribute("class", "fa-solid fa-trash")
            trash.style.color = "silver"
            trash.style.display = "none"



            let colors = document.createElement("div")
            colors.classList.add("colors")
            colors.style.display = "none"


            let rightIcon = document.createElement("div")
            rightIcon.classList.add("rightIcon")


            let toggleLock = document.createElement("i");
            toggleLock.setAttribute("class", "fa-solid fa-lock lock");

            let toggleUnlock = document.createElement("i");
            toggleUnlock.setAttribute("class", "fa-solid fa-lock-open unlock");

            
            toggleLock.addEventListener("click", function (){
                this.replaceWith(toggleUnlock)
                txtarea1.setAttribute("readonly", "readonly")
                // checked.style.display = "none"
                // editBTn.style.display = "none"
                // trash.style.display = "none"
                // colors.style.display = "none"

                   checked.style.display = "block"
                editBTn.style.display = "block"
                trash.style.display = "block"
                colors.style.display = "block"
            })

            toggleUnlock.addEventListener("click", function (){
                this.replaceWith(toggleLock)
                // checked.style.display = "block"
                // editBTn.style.display = "block"
                // trash.style.display = "block"
                // colors.style.display = "block"
                checked.style.display = "none"
                editBTn.style.display = "none"
                trash.style.display = "none"
                colors.style.display = "none"

            })

            checked.addEventListener("click", function (){
                modal_sub.style.display = "none"
            })
            
            editBTn.addEventListener("click", function (){
                txtarea1.removeAttribute("readonly")
            })

            trash.addEventListener("click", function (){
                modal_sub.remove()
            })

            cont.append(modal_sub)   
            modal_sub.append(txtarea1)
            modal_sub.append(bottoms)   
            bottoms.append(leftIcon)   
            bottoms.append(rightIcon)
            leftIcon.append(checked)
            leftIcon.append(editBTn)
            leftIcon.append(trash)
            leftIcon.append(colors)


            rightIcon.append(toggleLock)
            // rightIcon.append(toggleUnlock)



            txtarea1.value = txtarea.value
            txtarea1.setAttribute("readonly", "readonly")

        }


    })

})

