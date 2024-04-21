
import Banner from "./Banner/Banner";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Slider from "./Slider/Slider";
import SliderText from "./Slider/Slidertext";





const Home = () => {
     
    return (
        <div className="bg-white">
            <Banner></Banner>
            <SliderText></SliderText>
            <Slider></Slider>
            <Section2></Section2>
             <Section1></Section1>
        </div>
    );
};

export default Home;