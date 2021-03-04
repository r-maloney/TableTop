import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./splash.css";

const Splash = () => {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/health-carousel-cropped.png)`,
  };

  return (
    <></>

    // <Carousel
    //   showThumbs={false}
    //   infiniteLoop
    //   autoPlay
    //   stopOnHover={true}
    //   interval='5000'
    // >
    //   <div className='slide1' style={style}>
    //     <img src='/images/school-carousel.jpg' alt='School carousel'></img>
    //   </div>
    //   <div className='slide1'>
    //     <img src='/images/health-carousel.jpg' alt='School carousel'></img>
    //   </div>
    //   <div>
    //     <div>
    //       <img
    //         src='/images/food-carousel-cropped.png'
    //         alt='School carousel'
    //       ></img>
    //       <p>Hello</p>
    //     </div>
    //   </div>
    // </Carousel>
  );
};

export default Splash;
