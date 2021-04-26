import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Business from "../Explore/Business";
import "../Explore/Explore.css";

const Map = () => {
  const businesses = useSelector((state) => Object.values(state.businesses));

  const [viewport, setViewport] = useState({
    latitude: 38.90882113835013,
    longitude: -76.99803202807391,
    zoom: 11,
    width: "100%",
    height: "100vh",
  });

  const [selectedBusiness, setSelectedBusiness] = useState(null);

  return (
    <>
      {businesses[0] && (
        <ReactMapGL
          {...viewport}
          onViewportChange={(newView) => setViewport(newView)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
          mapStyle={"mapbox://styles/r-maloney/ckns1ra7k010p17qvzie84vad"}
        >
          {businesses.map((business) => (
            <Marker
              latitude={business.lat}
              longitude={business.long}
              offsetLeft={-15}
              offsetTop={-40}
              // offset={[0, -50 / 2]}
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
              offsetTop={-30}
              onClose={() => setSelectedBusiness(null)}
            >
              <div className='map__popup'>
                <img
                  src={selectedBusiness.img_url}
                  alt={`${selectedBusiness.name} profile`}
                ></img>
                <div>
                  <h2>{selectedBusiness.name}</h2>
                  <h3>{selectedBusiness.description}</h3>
                </div>
              </div>
              {/* <div
                key={selectedBusiness.id}
                className='explore__business-card'
                style={{ width: "14rem", margin: "0", padding: "0" }}
              >
                <Business business={selectedBusiness} />
              </div> */}
            </Popup>
          )}
        </ReactMapGL>
      )}
    </>
  );
};

export default Map;
