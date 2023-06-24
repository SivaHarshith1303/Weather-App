
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
cityName.innerHTML = city
cityName1.innerHTML = city
cityName2.innerHTML = city
cityName3.innerHTML = city 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        temp.innerHTML =  response.temp       
        feels_like.innerHTML =    response.feels_like         
        humidity.innerHTML =    response.humidity     
        min_temp.innerHTML =   response.min_temp      
        max_temp.innerHTML =    response.max_temp    
        wind_speed.innerHTML =    response.wind_speed  
        wind_degrees.innerHTML=    response.wind_degrees            
        sunrise.innerHTML =    response.sunrise       
        sunset.innerHTML =    response.sunset  
    })
    .catch(err => console.error(err));
}
const getWeather1 = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {
    
            console.log(response)
            temp1.innerHTML =  response.temp               
            humidity1.innerHTML =    response.humidity     
            wind_speed1.innerHTML =    response.wind_speed             
            sunrise1.innerHTML =    response.sunrise       
        })
        .catch(err => console.error(err));
    }


const getWeather3 = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {
    
            console.log(response)
            temp3.innerHTML =  response.temp          
            humidity3.innerHTML =    response.humidity       
            wind_speed3.innerHTML =    response.wind_speed           
            sunrise3.innerHTML =    response.sunrise        
        })
        .catch(err => console.error(err));
}

const getWeather4 = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {
    
            console.log(response)
            temp4.innerHTML =  response.temp               
            humidity4.innerHTML =    response.humidity     
            wind_speed4.innerHTML =    response.wind_speed            
            sunrise4.innerHTML =    response.sunrise       
        })
        .catch(err => console.error(err));
}

const getWeather5 = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {
    
            console.log(response) 
            temp5.innerHTML =  response.temp             
            humidity5.innerHTML =    response.humidity     
            wind_speed5.innerHTML =    response.wind_speed              
            sunrise5.innerHTML =    response.sunrise         
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather1("Bombay")
    getWeather3("Kerala")
    getWeather4("Kharagpur")
    getWeather5("Madras")
    getWeather(city.value)
})
