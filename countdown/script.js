let countDown = new Date("Aug 23, 2022 00:00:00").getTime()

let value = setInterval(function () {
    let current = new Date().getTime();
    let distance = countDown - current;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".day").innerHTML = days
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minutes").innerHTML = minutes
    document.querySelector(".seconds").innerHTML = seconds

    if (distance < 0) {
        clearInterval(value);
        document.querySelector(".day").innerHTML = "00"
        document.querySelector(".hours").innerHTML = "00"
        document.querySelector(".minutes").innerHTML = "00"
        document.querySelector(".seconds").innerHTML = "00"

    }

}

)