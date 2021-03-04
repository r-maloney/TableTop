import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./splash.css";

const Splash = () => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      stopOnHover={true}
      interval='5000'
    >
      <div>
        <img src='/images/school-carousel.jpg' alt='School carousel'></img>
      </div>
      <div>
        <img src='/images/health-carousel.jpg' alt='School carousel'></img>
      </div>
      <div>
        <div>
          <img src='/images/food-carousel.png' alt='School carousel'></img>
          <p>Hello</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Splash;
