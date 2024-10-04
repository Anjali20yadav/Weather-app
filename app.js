const apikey="32e155ec4d9037a3bf78819adf0bcbc6";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
          const searchbox=document.querySelector(".search input");
          const searchBtn=document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-icon")
        
          async function checkweather(city){
            const response=await fetch(apiUrl + city + `&appid=${apikey}`);
        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{
            var data=await response.json();
       
       document.querySelector(".city").innerHTML=data.name;
       document.querySelector(".temp").innerHTML=data.main.temp+"°c";
       document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
       document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
   
   if(data.weather[0].main=="clouds"){
       weatherIcon.src="assets/clouds.png"; 
   }
   else if(data.weather[0].main=="clear"){
       weatherIcon.src="assets/clear.png"; 
   }
   else if(data.weather[0].main=="rain"){
       weatherIcon.src="assets/rain.png"; 
   }
   else if(data.weather[0].main=="drizzle"){
       weatherIcon.src="assets/drizzle.png"; 
   }
   else if(data.weather[0].main=="mist"){
       weatherIcon.src="assets/mist.png"; 
   }
   
   document.querySelector(".weather").style.display="block";
   document.querySelector(".error").style.display="none";
   }
        }
        
        
           
    searchBtn.addEventListener("click",()=>{
        checkweather(searchbox.value);
    })    