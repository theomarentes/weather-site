import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export function LocationSearch(){
	let url = "http://dataservice.accuweather.com/locations/v1/cities/search"
	let {weather, setWeather} = useContext(WeatherContext);
	let [locationSearchData, setLocationSearchData] = useState("brisbane");

	const searchLocation = async () => {
		let response = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + locationSearchData+ "&appid=f273554cca7d7e91aa70a108b0f4bf3e")
		let data = await response.json();

        let response2 = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat="+data[0].lat+"&lon="+data[0].lon+"&appid=f273554cca7d7e91aa70a108b0f4bf3e")
        let data2 = await response2.json()
		
        setWeather({data: data2});
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
		</div>
	)

}