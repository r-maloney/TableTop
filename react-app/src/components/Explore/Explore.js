import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBusinesses } from "../../store/business";

const Explore = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(true);
  // const restaurants = useSelector((state) => state.businesses)

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  return (
    <>
      <h1>Explore</h1>
      <div className='explore__container'>
        <div className='explore__category'>
          <h2>Restaurants</h2>
          {/* {isLoaded && bus} */}
          <div className='explore__business-list'>
            {isLoaded && <div>1</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
