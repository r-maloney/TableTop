import React, { useState } from "react";

const Explore = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <h1>Explore</h1>
      <div className='explore__container'>
        <div className='explore__category'>
          <h2>Restaurants</h2>
          <div className='explore__business-list'>
            {isLoaded && <div>1</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
