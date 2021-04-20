import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getBusinesses } from "../../store/business";
import Menu from "./Menu";
import "./Explore.css";

const BusinessProfile = ({ orderId }) => {
  let { id } = useParams();
  id -= 1;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  const business = useSelector((state) => state.business[id]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (business) {
      setIsLoaded(true);
    }
  }, [business]);

  if (!isLoaded) {
    return null;
  }

  const addMessage = (item) => {
    setMessage(item.name);
    setAlert(true);
  };

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
      {alert && (
        <div className='item-added__alert'>
          <p>{message} added to order</p>
          <button onClick={() => setAlert(false)}>x</button>
        </div>
      )}
      <div className='business__menu'></div>
      <Menu business={business} orderId={orderId} addMessage={addMessage} />
    </div>
  );
};

export default BusinessProfile;
