// Pokemon Data Provider
// [PokemonObj1, PokemonObj2, PokemonObj3];

import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export const WeatherContext = createContext([]);

export function WeatherProvider(props){

	let [weather, setWeather] = useState([]);

	return(
		<WeatherContext.Provider value={{weather, setWeather}} >
			{props.children}
		</WeatherContext.Provider>
	)
}