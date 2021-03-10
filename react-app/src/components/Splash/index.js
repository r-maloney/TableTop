import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./splash.css";
import donateIcon from "../../images/icons/heart_box_donation.png";
import shopIcon from "../../images/icons/shop_store.png";
import charityIcon from "../../images/icons/charity_donation.png";
import SignUpForm from "../auth/SignUpForm";

const Splash = () => {
  // const style = {
  //   backgroundImage: `url(${backgroundImage})`,
  // };

  const [registration, setRegistration] = useState(false);

  return (
    <div className='splash__container'>
      <div className='splash__header'>
        <div className='splash__blur'>
          <div className='splash__title'>
            <h1>Welcome to TableTop</h1>
            <p>Buy online and benefit charity</p>
            <input className='splash__input' placeholder='Enter your email' />
            <button
              className='splash__email-btn'
              onClick={() => setRegistration(!registration)}
            >
              Submit
            </button>
            {registration && <SignUpForm />}
          </div>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 319'
          className='splash__wave'
        >
          <path
            fill='#FFF'
            fill-opacity='1'
            d='M0,64L60,69.3C120,75,240,85,360,117.3C480,149,600,203,720,213.3C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='splash__steps'>
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
