
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const SliderText = () => {

    useEffect(() =>{
        AOS.init({
            offset:200,
            delay: 100,
            duration:800,
            easing: 'ease-in',
            once:true,
        })
    },[])


    return (
        <div>
            <h1 className="text-6xl py-16 mt-7 text-center time" data-aos="fade-up">Our Most Popular Hotel Across The World</h1>
        </div>
    );
};

export default SliderText;