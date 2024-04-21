import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Section2 = () => {


    useEffect(() =>{
        AOS.init({
            offset:200,
            delay: 100,
            duration:800,
            easing: 'ease-in-sine',
            once:true,
        })
    },[])


    return (
        <div className="flex justify-center items-center gap-20 w-full mt-14 max-w-7xl mx-auto bg-stone-50 p-24" >
            <div>
               <figure className="">
               <img src="https://i.ibb.co/52WKNSY/eugenivy-now-sek4e-Q5r1-O0-unsplash.jpg" className="w-[500px] h-[500px] border-8 border-white rounded-md"  alt="" />
               </figure>
            </div>
            <div className="w-[500px] text-start" data-aos="fade-right">
                <h2 className="text-5xl my-7 time font-semibold">Unwind and Rejuvenate</h2>
                <p className="text-xl text-stone-500 time">Relax and rejuvenate at our state-of-the-art spa and wellness facilities. From invigorating massages to soothing treatments, immerse yourself in tranquility and emerge feeling refreshed and revitalized.</p>
            </div>
        </div>
    );
};

export default Section2;