import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getBusinesses } from "../../store/business";
import Map from "../Map/Map";
import Business from "./Business";

const Explore = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeBusiness, setActiveBusiness] = useState();

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  let businesses = useSelector((state) => state.businesses);
  let restaurants = Object.values(businesses);

  useEffect(() => {
    if (restaurants[0] !== null) {
      setIsLoaded(true);
    }
  }, [restaurants]);

  return (
    <div className='explore__root'>
      <div className='explore__container'>
        {isLoaded && <Map setActiveBusiness={setActiveBusiness} />}
        <div className='explore__category'>
          {activeBusiness && (
            <div className='business__active'>
              <img
                src={activeBusiness.img_url}
                alt={`${activeBusiness.name} profile`}
              ></img>
              <div className='business__active-description'>
                <h2>{activeBusiness.name}</h2>
                <h3>Rating: {activeBusiness.rating}</h3>
                <h3>{activeBusiness.description}</h3>
                <NavLink to={`/explore/${activeBusiness.id}`}>
                  View Menu
                </NavLink>
              </div>
            </div>
          )}
          <div className='explore__business-list'>
            {isLoaded &&
              restaurants.map((business) => (
                <div key={business.id} className='explore__business-card'>
                  <Business
                    business={business}
                    setActiveBusiness={setActiveBusiness}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
