import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

function ForecastCard(props) {
	let {weather, setWeather} = useContext(WeatherContext); 

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{((weather.data.current.temp - 32) * (5/9)) + "°C"} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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