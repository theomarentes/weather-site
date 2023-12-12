import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import ForecastCard from "./ForecastCard";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export function Forecast(){
	let {weather, setWeather} = useContext(WeatherContext);

	if (weather.data) {
        return(
        <>
        {weather.data.daily.map((element, index) => {
				return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>DAY NAME</Card.Title>
                            <Card.Text>
                                Min: {Math.round((element.temp.min - 273.15)) + "°C"}
                                <br/>
                                Max: {Math.round((element.temp.max - 273.15)) + "°C"}
                            {console.log((element.temp.min))}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        </ListGroup>
                    </Card>
                )
		})}
        
        </>
        )
    }

}