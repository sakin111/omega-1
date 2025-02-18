
import Animax from "./Animax";
import BannerWrite from "./BannerWrite";

const Banner = () => {
    return (
        <div className="bg-white max-w-7xl mx-auto py-6">
            <div className="hero  h-[500px]  bg-fixed backdrop-blur-0 relative " style={{
                backgroundImage: 'url(https://i.ibb.co/NZty997/patrick-robert-doyle-AH8z-KXq-FITA-unsplash.jpg)',
                border: "none",
                borderRadius: "20px"
            }}>

                <div className="absolute inset-0 left-0 w-1/2 bg-gradient-to-r from-slate-800 via-transparent"   style={{ borderRadius: "20px" }}></div>

               
                <div className="  hero-content text-center text-neutral-content">
                    <div className="w-full">
                        <BannerWrite></BannerWrite>
                    </div>
                </div>
                <Animax></Animax>
            </div>
        </div>
    );
};

export default Banner;



