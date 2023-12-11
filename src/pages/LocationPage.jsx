import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { LocationSearch } from "../components/LocationSearch";

export function LocationPage(){
	return(
		<>
		<LocationSearch	/>
		</>
	)

}