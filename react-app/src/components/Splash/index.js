import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./splash.css";

const Splash = () => {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/health-carousel-cropped.png)`,
  };

  return (
    <div>
      <h1>Welcome to TableTop</h1>
      <div>
        <h2>Step 1</h2>
        <p>Select a charity you would like to benefit</p>
        <img src='/images/icons/charity_donation.png' alt='Charity' />
      </div>
      <div>
        <h2>Step 2</h2>
        <p>Explore restaurants, stores, and services</p>
        <img src='/images/icons/shop_store.png' alt='Shop' />
      </div>
      <div>
        <h2>Step 3</h2>
        <p>Checkout and a portion of your total will go to charity</p>
        <img src='/images/icons/heart_box_donation.png' alt='Checkout' />
      </div>
    </div>

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
