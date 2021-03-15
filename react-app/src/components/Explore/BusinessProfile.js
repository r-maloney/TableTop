import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getBusinesses } from "../../store/business";
import Menu from "./Menu";
import "./explore.css";

const BusinessProfile = ({ orderId }) => {
  let { id } = useParams();
  id -= 1;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  const business = useSelector((state) => state.business[id]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (business) {
      setIsLoaded(true);
    }
  }, [business]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className='business__container'>
      <img
        className='business__img'
        src={business.img_url}
        alt={business.name}
      ></img>
      <div className='business__name'>{business.name}</div>
      <div className='business__rating'>Rating: {business.rating}</div>
      <div className='business__description'>{business.description}</div>
      <div className='business__menu'></div>
      <Menu business={business} orderId={orderId} />
    </div>
  );
};

export default BusinessProfile;
