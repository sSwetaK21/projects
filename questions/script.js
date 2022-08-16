

let accordion = document.querySelectorAll(".box")

for(let i = 0; i <accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        // e.preventDefault()
        this.classList.toggle("active");
    })
}