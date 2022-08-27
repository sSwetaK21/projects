 //query selectors
 var cityInput = document.querySelector('.search-bar');
 var btn1 = document.querySelector('.sbtn');
 //event Listeners
 btn1.addEventListener('click',function(name){

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=5142a079c21f6cb2df156c3a42bfec63`)//fetching api data
     .then(response=>response.json())//text --> json
     .then(data=>{
         let result= `<div><h1>city : ${data.name}</h1> 
             <h1>temp = ${Math.floor(data["main"].temp-273)} °C</h1>
             <h1> pressure = ${data["main"].pressure} </h1>
             <h1> humidity = ${data["main"].humidity} </h1></div>`
         let weather = document.querySelector(".weather")
         weather.innerHTML = result
         console.log(data)
     }).catch(err=>alert("invalid city name"))

 })