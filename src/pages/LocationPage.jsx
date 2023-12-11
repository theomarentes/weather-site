import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { LocationSearch } from "../components/LocationSearch";
import { Forecast } from "../components/Forecast";

export function LocationPage(){
	return(
		<>
		<LocationSearch	/>
        <Forecast  />
		</>
	)

}