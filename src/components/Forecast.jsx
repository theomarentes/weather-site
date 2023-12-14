// import "../App.css"
// import { useContext, useState } from "react";
// import { WeatherContext } from "../contexts/WeatherContext";
// import ForecastCard from "./ForecastCard";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';


// export function Forecast(){
// 	let {weather, setWeather} = useContext(WeatherContext);
//     let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     const d = new Date();
//     let day = d.getDay();
//     console.log(day)

// 	if (weather.data) {
//         return(
//         <div className="weather-container">
//             <h1>Forecast</h1>
//             {weather.data.daily.map((element, index) => {
//                     return (
//                         <>

            
//                         <Card style={{ width: '18rem' }}>
//                             <Card.Img style={{width: 100 +"px"}} variant="top" src={"https://openweathermap.org/img/wn/"+element.weather[0].icon+"@2x.png"} />
//                             <Card.Body>
//                                 <Card.Title>{days[(day+index) % 7]}</Card.Title>
//                                 <Card.Text>
//                                 {element.weather[0].main + " - " + element.weather[0].description}
                                    
                                    
//                                 {console.log((element))}
//                                 </Card.Text>
//                             </Card.Body>
//                             <ListGroup className="list-group-flush">
//                                 <ListGroup.Item>Min: {Math.round((element.temp.min - 273.15)) + "°C"}</ListGroup.Item>
//                                 <ListGroup.Item>Max: {Math.round((element.temp.max - 273.15)) + "°C"}</ListGroup.Item>
//                                 <ListGroup.Item>Humidity: {Math.round((element.humidity)) + "%"}</ListGroup.Item>
                            
//                             </ListGroup>
//                         </Card>
//                         </>
//                     )
//             })}
//         </div>
//         )
//     }

// }

import "../App.css"
import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { Card, Image, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export function Forecast() {
    let { weather } = useContext(WeatherContext);
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const d = new Date();
    let day = d.getDay();

    if (weather.data) {
        return (
            <div className="weather-container">
                <h1>Forecast</h1>
                {weather.data.daily.map((element, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        <Image src={"https://openweathermap.org/img/wn/" + element.weather[0].icon + "@2x.png"} style={{ width: 100 }} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{days[(day + index) % 7]}</Card.Header>
                            <Card.Description>
                                {element.weather[0].main + " - " + element.weather[0].description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <List>
                                <List.Item>Min: {Math.round(element.temp.min - 273.15) + "°C"}</List.Item>
                                <List.Item>Max: {Math.round(element.temp.max - 273.15) + "°C"}</List.Item>
                                <List.Item>Humidity: {Math.round(element.humidity) + "%"}</List.Item>
                            </List>
                        </Card.Content>
                    </Card>
                ))}
            </div>
        );
    }
}
