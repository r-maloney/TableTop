import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "../Explore/Explore.css";

const Map = () => {
  const businesses = useSelector((state) => Object.values(state.business));
  console.log(businesses);

  const [viewport, setViewport] = useState({
    latitude: 38.90882113835013,
    longitude: -76.99803202807391,
    zoom: 11,
    width: "100%",
    height: "100vh",
  });

  const [selectedBusiness, setSelectedBusiness] = useState(null);

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(newView) => setViewport(newView)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      mapStyle={"mapbox://styles/r-maloney/ckns1ra7k010p17qvzie84vad"}
    >
      {businesses[0] &&
        businesses.map((business) => (
          <Marker
            latitude={business.lat}
            longitude={business.long}
            offset={[0, -50 / 2]}
          >
            <button
              className='mapbox__spot-icon'
              onClick={(e) => {
                e.preventDefault();
                setSelectedBusiness(business);
              }}
            >
              <span>
                <i className='fas fa-map-pin'></i>
              </span>
            </button>
          </Marker>
        ))}
      {selectedBusiness && (
        <Popup
          longitude={selectedBusiness.long}
          latitude={selectedBusiness.lat}
          onClose={() => setSelectedBusiness(null)}
        >
          <div>{selectedBusiness.name}</div>
          <div>{selectedBusiness.description}</div>
          {/* <img src={selectedBusiness.img_url} alt='business logo' /> */}
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default Map;
