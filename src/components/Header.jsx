import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export function Header(){

	return(
		<div style={{background: "blue"}}>
			<h5>WeatherWhiz</h5>
		</div>
	)

}