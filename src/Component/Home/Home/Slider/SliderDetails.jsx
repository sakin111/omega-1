import { useLoaderData } from "react-router-dom";



const SliderDetails = () => {

    const item = useLoaderData()
    const { image, name, location, description, rooms, ratings } = item


    return (
        <>
       
        <div className="bg-white"> 
        <h1 className="text-center font-mono text-slate-700 text-6xl my-7">Our Hotels</h1>
        <div className=" divider divider-vertical"></div>
            <div className="bg-white max-w-7xl mx-auto mb-10">
            <div className=" max-w-6xl mx-auto pt-14">
            <div className="hero  h-[500px]  bg-fixed backdrop-blur-0 relative " style={{
                backgroundImage:` url(${image})`,
                border: "none",
                borderRadius: "20px"
            }}>
                <div className="absolute inset-0 left-0 w-1/2 bg-gradient-to-r from-slate-800 via-transparent"   style={{ borderRadius: "20px" }}></div>
            </div>
                <p className="text-base text-teal-400 font-bold font-Roboto">{location}</p>
            </div>


            <div className="flex justify-start gap-12 items-center px-16 mt-5">
                <div className="max-w-sm border-2 p-8 border-black rounded-lg">
                    <h3 className="text-3xl text-start font-bold time">{name}</h3>
                    <p className="text-gray-500 text-start mt-6 text-base time">{description}</p>
                </div>

                <div className="max-w-sm">
                    <h3 className="text-3xl mb-5 w-44 text-center border-2 p-5 rounded-lg text-emerald-300 border-black"> Rating : {ratings}</h3>
                    <h3 className=" text-3xl w-48 border-2 p-5  text-center rounded-lg text-cyan-400 border-black"> Rooms : {rooms}</h3>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default SliderDetails;