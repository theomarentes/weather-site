import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { LocationSearch } from "../components/LocationSearch";
import { Forecast } from "../components/Forecast";
import { Header } from "../components/Header";

export function HomePage(){
	return(
		<>
        <Header />
		<LocationSearch	/>
        <Forecast  />
		</>
	)

}