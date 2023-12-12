import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import ForecastCard from "./ForecastCard";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export function Forecast(){
	let {weather, setWeather} = useContext(WeatherContext);
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const d = new Date();
    let day = d.getDay();
    console.log(day)

	if (weather.data) {
        return(
        <>
        <h1>Forecast</h1>
        {weather.data.daily.map((element, index) => {
				return (
                    <>

        
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>{days[(day+index) % 7]}</Card.Title>
                            <Card.Text>
                            {element.weather[0].main + " - " + element.weather[0].description}
                                
                                
                            {console.log((element))}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Min: {Math.round((element.temp.min - 273.15)) + "°C"}</ListGroup.Item>
                            <ListGroup.Item>Max: {Math.round((element.temp.max - 273.15)) + "°C"}</ListGroup.Item>
                            <ListGroup.Item>Humidity: {Math.round((element.humidity)) + "%"}</ListGroup.Item>
                        
                        </ListGroup>
                    </Card>
                    </>
                )
		})}
        
        </>
        )
    }

}