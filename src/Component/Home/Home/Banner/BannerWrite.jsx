import { useEffect, useState } from "react";
import './BannerWrite.css'

const BannerWrite = () => {
    const [text, setText] = useState('');
    const welcomeText = "Welcome to Motela";
  
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
          setText(() => welcomeText.substring(0, index + 1));
          index++;
      
          if (index > welcomeText.length) {
            clearInterval(intervalId);
          }
        }, 100); // Adjust the interval duration as needed
      
        return () => {
          clearInterval(intervalId);
        };
      }, []);
      
  
    return (
      <div className="banner">
        <h1 className="text-7xl text-white font-Lato muichiro ">{text}</h1>
        <p className="text-white mx-auto font-Lato  border-l-4 border-cyan-200 pl-6  tokito">Discover Unparalleled Luxury and Comfort Indulge in the epitome of opulence at MOTELA. Our exquisite accommodations, world-class amenities, and personalized service await to elevate your stay to new heights.</p>
      </div>
    );
  };

export default BannerWrite;