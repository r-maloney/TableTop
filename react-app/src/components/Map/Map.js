import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 38.90882113835013,
    longitude: -76.99803202807391,
    zoom: 10,
    width: "100vw",
    height: "100vh",
  });
  return <ReactMapGL {...viewport} />;
};

export default Map;

// mapboxgl.accessToken =
//     "pk.eyJ1Ijoici1tYWxvbmV5IiwiYSI6ImNra2owMWlnYTA4NDMycG1qb3JqZ2Q1NzcifQ.mlD79-dbzdr4suQkMnyfgw";
//   const map = new mapboxgl.Map({
//     container: "YOUR_CONTAINER_ELEMENT_ID",
//     style: "mapbox://styles/mapbox/streets-v11",
//   });

//   const [viewPort, setViewPort] = useState({
//     latitude: 38.90882113835013,
//     longitude: -76.99803202807391,
//     zoom: 10,
//     width: "100vw",
//     height: "100vh",
//   });
//   return (
//     <div>
//       <mapboxgl {...viewPort}></mapboxgl>
//     </div>
//   );
