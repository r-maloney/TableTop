import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBusinesses } from "../../store/business";
import Map from "../Map/Map";
import Business from "./Business";

const Explore = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  let businesses = useSelector((state) => state.business);
  let restaurants = Object.values(businesses);
  // if (businesses[0]) {
  //   restaurants = Object.values(businesses).filter(
  //     (b) => b.type === "Restaurant"
  //   );
  // }
  useEffect(() => {
    if (restaurants[0] !== null) {
      // console.log("check", restaurants);
      setIsLoaded(true);
    }
  }, [restaurants]);

  return (
    <div className='explore__root'>
      <div className='explore__container'>
        <Map />
        <div className='explore__category'>
          <h2>Local Restaurants</h2>

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
