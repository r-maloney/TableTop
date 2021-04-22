import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import restaurants from "../../data/locations.json";
import "../Explore/Explore.css";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 38.90882113835013,
    longitude: -76.99803202807391,
    zoom: 10,
    width: "50vw",
    height: "50vh",
  });

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
        <button className='mapbox__spot-icon'>
          <span>
            <i className='fas fa-map-pin'></i>
          </span>
        </button>
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
