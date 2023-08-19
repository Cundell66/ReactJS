
// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from './practice';


const [honda, tesla] = cars;

const {
    coloursByPopularity:[hondaTopColour]
}=honda;
// const [hondaTopColour] = honda.coloursByPopularity;

const {
    speedStats: {topSpeed: hondaTopSpeed}
} = honda;
// const {topSpeed:hondaTopSpeed} = honda.speedStats;

const {
    coloursByPopularity:[teslaTopColour]
}=tesla;
// const [teslaTopColour] = tesla.coloursByPopularity;

const {
    speedStats: {topSpeed: teslaTopSpeed}
} = tesla;
// const {topSpeed:teslaTopSpeed} = tesla.speedStats;



ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
