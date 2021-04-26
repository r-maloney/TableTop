import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
          <h2>Local Restaurants</h2>
          {activeBusiness && (
            // <div className='business--active'></div>
            <Business business={activeBusiness} />
          )}
          <div className='explore__business-list'>
            {isLoaded &&
              restaurants.map((business) => (
                <div key={business.id} className='explore__business-card'>
                  <Business business={business} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
