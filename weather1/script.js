 //query selectors
 let cityInput = document.querySelector('.cityName');
 let button = document.querySelector('.submitBtn');
 //event Listeners
 button.addEventListener('click',function(name){

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=5142a079c21f6cb2df156c3a42bfec63`)//fetching api data
     .then(response=>response.json())//text --> json
     .then(data=>{
         let result= `<div class="cont"><h1>City : ${data.name}</h1> 
             <h1>Temp : ${Math.floor(data["main"].temp-273)} °C</h1>
             <h1> Pressure : ${data["main"].pressure} </h1>
             <h1> Humidity : ${data["main"].humidity} </h1></div>`
         let container = document.querySelector(".container")
         container.innerHTML = result
         console.log(data)
     }).catch(err=>alert("invalid city name"))

 })