const apikey="691550ec46e1397509da1416d0941d4c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weatherIcon");

async function checkweather(city){
    const response=await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
    

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-1024.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-511x512-zfj6vb21.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Rain-1024.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="https://cdn3.iconfinder.com/data/icons/stylized-weather-icons/745/302HeavyDrizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="https://cdn0.iconfinder.com/data/icons/weather-347/64/fog-weather-mist-512.png";
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src="https://icons.veryicon.com/png/o/weather/weather-fill/weather-haze-3.png"
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    }
   
} 
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
});

