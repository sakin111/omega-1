import { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import "./Section2.css";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
    const wordRef = useRef(null);

    useLayoutEffect(() => {
        const myWords = gsap.utils.toArray(".myText");
        let ctx = gsap.context(() => {
            gsap.to(myWords, {
                    y: 0,
                    stagger: 0.05,
                    duration: 1,
                    delay:0.5,
                    
                });
           
        }, wordRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="mt-14 w-full mx-auto  rounded-lg container" ref={wordRef}>
            <div className="w-full h-96 text-center rounded-lg mx-auto relative overflow-hidden" id='stp2'>
                <div className='flex justify-start pl-9 items-center gap-3 mt-8 uppercase' id='wordText'>
                    <h2 className="text-5xl my-7 time font-semibold text-white myText">Unwind</h2>
                    <h2 className="text-5xl my-7 time font-semibold text-white myText">and</h2>
                    <h2 className="text-5xl my-7 time font-semibold text-white myText">Rejuvenate</h2>
                </div>
                <h2 className='text-xl font-semibold w-[600px] mb-5 text-start pl-9 font-Roboto' id='text2'>Escape to a world of tranquility and return feeling completely refreshed and renewed.</h2>
                <p className=" font-bold w-2/3 pl-9 text-start text-sm text-white time">
                Relax and rejuvenate at our state-of-the-art spa and wellness facilities. From invigorating massages to soothing treatments, immerse yourself in tranquility and emerge feeling refreshed and revitalized. Experience the perfect blend of luxury and serenity, designed to renew your spirit and invigorate your senses. Our expert therapists use the finest techniques and products to ensure your complete relaxation. Discover a sanctuary where every detail is crafted for your ultimate well-being and peace.
                </p>
            </div>
          
        </div>
    );
};

export default Section2;
