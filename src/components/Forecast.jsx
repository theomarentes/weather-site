import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export function Forecast(){
	let {weather, setWeather} = useContext(WeatherContext);

	return(
		<div>
            7 Day Forecast
		</div>
	)

}