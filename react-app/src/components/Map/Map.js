import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import restaurants from "../../data/locations.json";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 38.90882113835013,
    longitude: -76.99803202807391,
    zoom: 10,
    width: "50vw",
    height: "50vh",
  });
  console.log(restaurants);
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(newView) => setViewport(newView)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      mapStyle={"mapbox://styles/r-maloney/ckns1ra7k010p17qvzie84vad"}
    >
      <Marker
        latitude={restaurants.location[0]}
        longitude={restaurants.location[1]}
      >
        <div>spot</div>
      </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Map;

// mapboxgl.accessToken =
//     "pk.eyJ1Ijoici1tYWxvbmV5IiwiYSI6ImNra2owMWlnYTA4NDMycG1qb3JqZ2Q1NzcifQ.mlD79-dbzdr4suQkMnyfgw";
//   const map = new mapboxgl.Map({
//     container: "YOUR_CONTAINER_ELEMENT_ID",
//     style: "mapbox://styles/mapbox/streets-v11",
//   });
