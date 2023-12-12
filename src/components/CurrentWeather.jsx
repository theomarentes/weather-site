import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import ForecastCard from "./ForecastCard";

export function CurrentWeather(){
	let {weather, setWeather} = useContext(WeatherContext);

	if (weather.data) {
        return(
        <>
        <h1>Current Weather</h1>
        <p>Current Temperature: {Math.round(weather.data.current.temp - 273.15)}</p>
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