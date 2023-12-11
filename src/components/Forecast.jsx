import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export function Forecast(){
	let {weather, setWeather} = useContext(WeatherContext);

	if (weather.data) {
        return(
        <>
        {
            "temperature now is " + weather.data.current.temp +
            "Farenheit... temperature tomorrow is: " + weather.data.daily[0].temp.day
        }
        {console.log(weather)}
        </>
        )
    }

}