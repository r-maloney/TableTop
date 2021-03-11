import "./explore.css";
import { NavLink } from "react-router-dom";

const Business = ({ business }) => {
  return (
    <div className='business__container'>
      <NavLink to={`/business/${business.id}`}>
        <img
          className='business__img'
          src={business.img_url}
          alt={business.name}
        ></img>
        <div className='business__name'>{business.name}</div>
        <div className='business__rating'>Rating: {business.rating}</div>
        <div className='business__description'>{business.description}</div>
        {/* <div className='business__type'>{business.type}</div> */}
      </NavLink>
    </div>
  );
};

export default Business;
