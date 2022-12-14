//selectors

let createBtn = document.querySelector(".createbtn")
let cont = document.querySelector(".container")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")
let black = document.querySelector(".black")

//create task js
createBtn.addEventListener("click", function () {
    let modal_content = document.createElement("div");
    modal_content.classList.add("modal_content")

    let txtarea = document.createElement("textarea");
    txtarea.classList.add("txtarea")
    txtarea.setAttribute("placeholder", "Enter task here")
    txtarea.style.backgroundColor = "#7e54b5"
    txtarea.style.outline = "none"
    txtarea.style.color = "white"

    //colorsbuttons

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

    //coloring buttons to change modal color

    redbtn.addEventListener("click", function () {
        modal_content.style.backgroundColor = "red"
        txtarea.style.backgroundColor = "red"
        txtarea.style.outline = "none"

    })

    greenbtn.addEventListener("click", function () {
        modal_content.style.backgroundColor = "green"
        txtarea.style.backgroundColor = "green"
        txtarea.style.outline = "none"

    })

    bluebtn.addEventListener("click", function () {
        modal_content.style.backgroundColor = "blue"
        txtarea.style.backgroundColor = "blue"
        txtarea.style.outline = "none"

    })

    blackbtn.addEventListener("click", function () {
        modal_content.style.backgroundColor = "black"
        txtarea.style.backgroundColor = "black"
        txtarea.style.outline = "none"

    })

//appending elemnts with its parents

    modal_content.appendChild(txtarea)
    modal_content.append(colorsbtn)
    modal_content.append(closebtn)
    modal_content.append(submitbtn)

    cont.append(modal_content)    //mmain div append

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

            // modal_sub.style.backgroundColor = colorsbtn.style.backgroundColor

            let txtarea1 = document.createElement("textarea");
            txtarea1.classList.add("txtarea")
            txtarea1.setAttribute("col", "38")
            txtarea1.setAttribute("rows", "5")
            txtarea1.setAttribute("width", "270px")
            txtarea1.setAttribute("height", "140px")
            txtarea1.style.backgroundColor = "#7e54b5"
            txtarea1.style.outline = "none"



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
            colors.style.backgroundColor = "red"



            let rightIcon = document.createElement("div")
            rightIcon.classList.add("rightIcon")


            let toggleLock = document.createElement("i");
            toggleLock.setAttribute("class", "fa-solid fa-lock lock");

            let toggleUnlock = document.createElement("i");
            toggleUnlock.setAttribute("class", "fa-solid fa-lock-open unlock");


            toggleLock.addEventListener("click", function () {
                this.replaceWith(toggleUnlock)
                txtarea1.setAttribute("readonly", "readonly")

                checked.style.display = "block"
                editBTn.style.display = "block"
                trash.style.display = "block"
                colors.style.display = "block"

            })

            toggleUnlock.addEventListener("click", function () {
                this.replaceWith(toggleLock)

                checked.style.display = "none"
                editBTn.style.display = "none"
                trash.style.display = "none"
                colors.style.display = "none"

            })

            checked.addEventListener("click", function () {
                modal_sub.style.display = "none"
            })

            editBTn.addEventListener("click", function () {
                txtarea1.removeAttribute("readonly")
                txtarea1.style.color = "white"

            })

            trash.addEventListener("click", function () {
                modal_sub.remove()
            })

            colors.addEventListener("click", function () {
                if (colors.style.backgroundColor == "red") {
                    colors.style.backgroundColor = "green"
                    modal_sub.style.backgroundColor = "green"
                } else if (colors.style.backgroundColor == "green") {
                    colors.style.backgroundColor = "blue"
                    modal_sub.style.backgroundColor = "blue"
                } else if (colors.style.backgroundColor == "blue") {
                    colors.style.backgroundColor = "black"
                    modal_sub.style.backgroundColor = "black"
                    toggleUnlock.style.color = "white"
                    toggleLock.style.color = "white"

                } else {
                    colors.style.backgroundColor = "red"
                    modal_sub.style.backgroundColor = "red"
                }
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


    //navbar buttons linking

    red.addEventListener("click", function () {
        if (colors.style.backgroundColor == "red") {
            // let redbox = document.createElement("div")
            // redbox.classList.add("redbox")
            // redbox.append(modal_sub)
            modal_sub.style.visibility = "none"
        } else {
            modal_sub.style.visibility = "hidden"
        }

    })

    green.addEventListener("click", function () {
        if (colors.style.backgroundColor == "green") {
            cont.append(modal_sub)
            modal_sub.style.display = "block"

        } else {
            cont.style.display = "none"
        }
    })

    blue.addEventListener("click", function () {
        if (colors.style.backgroundColor == "blue") {
            cont.append(modal_sub)
        }
    })

    black.addEventListener("click", function () {
        if (colors.style.backgroundColor == "black") {
            cont.append(modal_sub)
        }
    })

})

