import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export function LocationSearch(){
	let url = "http://dataservice.accuweather.com/locations/v1/cities/search"
	let {weather, setWeather} = useContext(WeatherContext);
	let [locationSearchData, setLocationSearchData] = useState("brisbane");

	const searchLocation = async () => {
		let response = await fetch(url + "?apikey=E6q223AkLYY15gGXrVPo4G7gQmHvI7IJ&q=" + locationSearchData)
		let data = await response.json();
		
		let response2 = await fetch("http://dataservice.accuweather.com/currentconditions/v1/" + data[0]['Key'] +"?apikey=E6q223AkLYY15gGXrVPo4G7gQmHvI7IJ")
		let data2 = await response2.json()
		setWeather(data2[0]);
	}

	return(
		<div>
			<h5>Enter a location:</h5>
			<input 
				type="text" 
				name="location" 
				id="location" 
				value={locationSearchData} 
				onChange={event => setLocationSearchData(event.target.value)} 
			/>
			<button onClick={searchLocation} type="submit">Search</button>
			{locationSearchData + " temperature is " + weather.Temperature.Metric.Value}
		</div>
	)

}