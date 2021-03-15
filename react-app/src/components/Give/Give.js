import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCharities } from "../../store/charity";
import "../Explore/explore.css";

const Give = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharities());
  }, [dispatch]);

  // let businesses = useSelector((state) => state.business);
  let charitiesObject = useSelector((state) => state.charities);
  let charities = Object.values(charitiesObject);

  if (charities) {
    console.log(charities);
  }

  const [isLoaded, setIsLoaded] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (charities) {
      setIsLoaded(true);
    }
  }, [charities]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className='charity__list'>
      {isLoaded &&
        charities.map((charity) => (
          <div key={charity.id} className='charity__container'>
            <img
              className='charity__img'
              src={charity.img_url}
              alt={charity.name}
            ></img>
            <div className='charity__name'>{charity.name}</div>
            <div className='charity__description'>{charity.description}</div>
            <button onClick={() => setSelected(charity.id)}>
              {(charity.id = selected ? "Selected" : "Select Me")}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Give;
