//selectors

let hist = document.querySelector(".hist")
let vis = document.querySelector(".vis")
let goal = document.querySelector(".goal")

let historyBox = document.querySelector("#history")
let visionBox = document.querySelector("#vision")
let goalBox = document.querySelector("#goal")

historyBox.style.display = "block"
visionBox.style.display = "none"
goalBox.style.display = "none"

hist.addEventListener("click", function () {
    historyBox.style.display = "block"
    visionBox.style.display = "none"
    goalBox.style.display = "none"
})


vis.addEventListener("click", function () {
    visionBox.style.display = "block"
    historyBox.style.display = "none"
    goalBox.style.display = "none"
})


goal.addEventListener("click", function () {
    goalBox.style.display = "block"
    historyBox.style.display = "none"
    visionBox.style.display = "none"
})
