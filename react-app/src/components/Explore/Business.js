import "./Explore.css";
import { NavLink } from "react-router-dom";

const Business = ({ business, setActiveBusiness }) => {
  return (
    <div className='business__container'>
      <button onClick={() => setActiveBusiness(business)}>
        <img
          className='business__img'
          src={business.img_url}
          alt={business.name}
        ></img>
        <div className='business__name'>{business.name}</div>
        <div className='business__rating'>Rating: {business.rating}</div>
        <div className='business__description'>{business.description}</div>
        {/* <div className='business__type'>{business.type}</div> */}
      </button>
    </div>
  );
};

export default Business;
