import React,{useState} from 'react';
import './App.css';
import Card from './Card/Card';
import Top from './Top/Top';
function App() {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const pri=(date.toLocaleString("en-US", options));
  const [temperature,settemperature]=useState("");
    const [ humidity,sethumidity]=useState("");
    const [ windspeed,setwindspeed]=useState("");
    const [feels_like,setfeels_like]=useState("");
    const [weather,setweather]=useState("");
    const [locc,setlocc]=useState("");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          console.log("Location not found.");
          return;
        }

        settemperature(data.main.temp);
        sethumidity(data.main.humidity);
        setwindspeed(data.wind.speed);
        setfeels_like((data.visibility)/1000);
        setweather(data.weather[0].main);
        setlocc(data.name);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error occurred:", error);
      });
  }
  function errorCallback(error) {
    console.log("Error getting location: " + error.message);
  }
  return (
    <div className="App">
     <Top className="in" date={pri} loca={locc} weath={weather} />
     <h1 className='hh'>{temperature}°</h1>
     <Card className="in" wind={windspeed} humid={humidity} visi={feels_like}/>
    </div>
  );
}

export default App;
