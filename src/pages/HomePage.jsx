import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { LocationSearch } from "../components/LocationSearch";
import { Forecast } from "../components/Forecast";
import { Header } from "../components/Header";
import { CurrentWeather } from "../components/CurrentWeather";

export function HomePage(){
	return(
		<>
        <Header />
		<LocationSearch	/>
		<CurrentWeather /> 
        <Forecast  />
		</>
	)

}