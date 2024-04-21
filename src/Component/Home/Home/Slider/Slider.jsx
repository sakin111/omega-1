
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import { MdAddLocationAlt } from "react-icons/md";
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

                        <div className="card w-96 bg-base-100 shadow-lg mb-10">
                            <Link to={`/slider/${item._id}`}>

                                <figure> <img src={item.image} alt={`Slide ${index}`} className='transition duration-300 hover:brightness-75' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title time">
                                        {item.name}
                                    </h2>
                                    <div className="card-actions justify-start">
                                        <div className="badge badge-outline"> <MdAddLocationAlt /></div>
                                        <div className="badge badge-outline">{item.location}</div>
                                    </div>
                                    <div className='flex justify-start items-center'>
                                        {Array.from({ length: Math.floor(item.ratings) }).map((_, i) => (
                                            <svg key={i} className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 20 20">
                                                <path d="M10 1l2.6 6.4L19 7l-5 5.2 1.2 7L10 16.4 4.8 19l1.2-7L1 7l6.4.4z"></path>
                                            </svg>
                                        ))}
                                        {item.ratings % 1 >= 0.7 ? (
                                            <svg key="full" className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 20 20">
                                                <path d="M10 1l2.6 6.4L19 7l-5 5.2 1.2 7L10 16.4 4.8 19l1.2-7L1 7l6.4.4z"></path>
                                            </svg>
                                        ) : item.ratings % 1 >= 0.3 ? (
                                            <svg key="half" className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 20 20">
                                                <path d="M8.1 6.2c-.2-.6-.8-1-1.4-1H2.3c-.6 0-1.1.5-1.4 1-.2.6 0 1.2.4 1.6l4.2 4.2-1 5.5c0 .3.1.6.3.9.3.3.7.5 1.1.5.3 0 .6-.1.9-.3L10 14l4.6 2.9c.3.2.6.3.9.3.4 0 .8-.2 1.1-.5.3-.3.4-.6.3-.9l-1-5.5 4.2-4.2c.4-.4.6-1 .4-1.6-.3-.6-.9-1-1.4-1h-4.4l-1.4-4.9c-.1-.5-.7-.8-1.2-.6zM10 12.4l-3.5 2.2 1-5.6L2.4 7.7h4.9L10 2.8l1.7 4.9h4.9l-5.1 3.3 1 5.6-3.5-2.2z"></path>
                                            </svg>
                                        ) : (
                                            <svg key="empty" className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 20 20">
                                                <path d="M10 1l2.6 6.4L19 7l-5 5.2 1.2 7L10 16.4 4.8 19l1.2-7L1 7l6.4.4z"></path>
                                            </svg>
                                        )}
                                        {Array.from({ length: 4 - Math.ceil(item.ratings) }).map((_, i) => (
                                            <svg key={`empty-${i}`} className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 20 20">
                                                <path d="M10 1l2.6 6.4L19 7l-5 5.2 1.2 7L10 16.4 4.8 19l1.2-7L1 7l6.4.4z"></path>
                                            </svg>
                                        ))}




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
