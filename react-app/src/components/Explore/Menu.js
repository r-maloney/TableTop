import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getItems } from "../../store/item";
import "./explore.css";

const Menu = ({ business }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (business) {
      setIsLoaded(true);
      setItems(business.items);
    }
  }, [business]);

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {items.map((item) => (
        <>
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>{item.price}</div>
          <div>{item.donation_percentage}</div>
        </>
      ))}
    </>
  );
};

export default Menu;
