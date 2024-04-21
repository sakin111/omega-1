

const Section1 = () => {
    return (
<div className="hero min-h-screen max-w-7xl mx-auto mt-20 rounded-2xl relative mb-11" style={{backgroundImage: 'url(https://i.ibb.co/LJsBN7j/5d6928ca-8e11-49ee-97d2-7d79c794637f.jpg)'}}>
    <div className="bg-image"></div>
    <div className="">
        <div className="hero-content text-center text-neutral-content absolute -translate-x-[600px] -translate-y-60 " >
            <div className="w-40 border-2 border-white p-5 backdrop-blur-sm rounded-2xl ">
                <h1 className="text-xl font-bold ">About us</h1>
            </div>
        </div>

        <div className="hero-content text-center text-neutral-content absolute -translate-x-[260px] -translate-y-20 z-10 " >
            <div className="w-40 border-2 border-white p-3 skew-y-12 backdrop-blur-sm rounded-2xl  before: shadow-2xl">
                <p className="text-sm text-white font-roboto">Welcome to Motela, where comfort meets hospitality. Experience a memorable stay with us in the heart of The Hotel</p>
            </div>
        </div>

            <div className="h-28 w-3 bg-white absolute -translate-x-44 translate-y-20 skew-y-12 rounded-2xl"></div>
    </div>
</div>








    )
};

export default Section1;

