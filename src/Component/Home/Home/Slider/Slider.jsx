
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';



const Slider = () => {



    const axiosPublic = useAxiosPublic();

    const { data, isLoading, error } = useQuery({
        queryKey: ['Slider'],
        queryFn: async () => {
            try {
                const response = await axiosPublic.get('/slider');
                return response.data;
            } catch (error) {
                console.error("Error fetching data:", error);
                throw error;
            }
        }
    });




    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;



    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                className="mySwiper"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}


            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>

                        <div className="card w-96 bg-base-100 px-3 mb-10">
                            <Link to={`/slider/${item._id}`}>

                                <figure> <img src={item.image} alt={`Slide ${index}`} className='transition duration-300 rounded-lg hover:brightness-75' /></figure>
                                <div className="card-body justify-start">
                                    <h2 className="card-title time">
                                        {item.name}
                                    </h2>
                                    <div className="card-actions justify-start">
                                        <div className=""> <CiLocationOn /></div>
                                        <div className="text-gray-700 text-sm">{item.location}</div>
                                    </div>
                                    <div className='flex justify-start items-center gap-2'>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                                        </div>
                                        {item.ratings}
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>

    );
};

export default Slider;
