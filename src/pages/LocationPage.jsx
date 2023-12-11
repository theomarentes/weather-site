// Form component 
// grabs a Pokemon name from user input
// makes a fetch request on submit
// returns data 

import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiProvider";
import { PokemonTeamContext } from "../contexts/PokemonDataProvider";

export function ApiSearchForm(){
	let {url} = "weather url"
	let {team, setTeam} = useContext(PokemonTeamContext);
	let [locationSearchData, setLocationSearchData] = useState("brisbane");

	const searchForPokemon = async () => {
		let response = await fetch(url + locationSearchData);
		let data = await response.json();
		setTeam([...team, {id: new Date(Date.now()).getTime(), pokemon: data}]);
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
			<button onClick={searchForPokemon} type="submit">Search</button>
		</div>
	)

}