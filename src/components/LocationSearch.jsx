import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export function LocationSearch(){
	let {url} = "weather url"
	let {weather, setWeather} = useContext(WeatherContext);
	let [locationSearchData, setLocationSearchData] = useState("brisbane");

	const searchLocation = async () => {
		let response = await fetch(url + locationSearchData);
		let data = await response.json();
		setWeather(data);
	}

	return(
		<div>
			<h5>Enter a location:</h5>
			<input 
				type="text" 
				name="location" 
				id="location" 
				value={locationSearchData} 
				onChange={event => setSearchData(event.target.value)} 
			/>
			<button onClick={searchLocation} type="submit">Search</button>
		</div>
	)

}