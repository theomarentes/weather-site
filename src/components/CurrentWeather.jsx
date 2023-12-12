import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import ForecastCard from "./ForecastCard";

export function CurrentWeather(){
	let {weather, setWeather} = useContext(WeatherContext);

	if (weather.data) {
        return(
        <>
        <h1>Current Weather</h1>
        <p>Current Conditions: {weather.data.current.weather[0].main + " - " + weather.data.current.weather[0].description}</p>
        
        <p>Current Temperature: {Math.round(weather.data.current.temp - 273.15) + "°C"}</p>
        <p>Feels Like: {Math.round(weather.data.current.feels_like - 273.15)+ "°C"}</p>
        <p>Current Humidity: {Math.round(weather.data.current.humidity) + "%"}</p>
        {console.log(weather.data)}
        </>
        )
    }
    else {
        return(
            <>
            <p>loading...</p>
            </>
        )
    }

}