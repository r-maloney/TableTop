import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from "react-map-gl";
import Business from "../Explore/Business";
import "../Explore/Explore.css";

const Map = ({ setActiveBusiness }) => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const businesses = useSelector((state) => Object.values(state.businesses));

  const [viewport, setViewport] = useState({
    latitude: 38.902357299811044,
    longitude: -77.02530355720046,
    zoom: 12,
    width: "100%",
    height: "100vh",
  });

  // function flyToStore(currentFeature) {
  //   map.flyTo({
  //     center: currentFeature.geometry.coordinates,
  //     zoom: 15,
  //   });
  // }

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
            >
              <button
                className='mapbox__spot-icon'
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedBusiness(business);
                  setActiveBusiness(business);
                  console.log(viewport);
                  setViewport({
                    ...viewport,
                    latitude: business.lat,
                    longitude: business.long,
                    zoom: 15,
                    transitionDuration: 500,
                    transitionInterpolator: new FlyToInterpolator(),
                  });
                  // setZoom(15);
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
              onClick={() => console.log("CLICKED")}
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
