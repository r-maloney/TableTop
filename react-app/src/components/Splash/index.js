import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./splash.css";
import donateIcon from "../../images/icons/heart_box_donation.png";
import shopIcon from "../../images/icons/shop_store.png";
import charityIcon from "../../images/icons/charity_donation.png";

const Splash = () => {
  // const style = {
  //   backgroundImage: `url(${backgroundImage})`,
  // };

  return (
    <div className='splash__container'>
      <div className='splash__header'>
        <h1>Welcome to TableTop</h1>
        <p>Enter your email to get started</p>
      </div>
      <div className='splash__step'>
        <div>
          <h2>Step 1</h2>
          <p>Select a charity you would like to benefit</p>
        </div>
        <img src={charityIcon} alt='Charity' />
      </div>
      <div className='splash__step'>
        <img src={shopIcon} alt='Shop' />
        <div>
          <h2>Step 2</h2>
          <p>Explore restaurants, stores, and services</p>
        </div>
      </div>
      <div className='splash__step'>
        <div>
          <h2>Step 3</h2>
          <p>Checkout and a portion of your total will go to charity</p>
        </div>
        <img src={donateIcon} alt='Checkout' />
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
