import { Card } from 'semantic-ui-react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

function ForecastCard(props) {
	let {weather, setWeather} = useContext(WeatherContext); 

  return (
    <Card id="forcast_card">
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{((weather.data.current.temp - 273.15)) + "°C"} </Card.Title>
        <Card.Text>
          {console.log((weather.data))}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ForecastCard;