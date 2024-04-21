import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";




const Rooms = () => {

    const axiosPublic = useAxiosPublic();
    const [alignment, setAlignment] = useState('web');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRooms, setFilteredRooms] = useState([]);



  
   

    const { data: rooms = [], isLoading, error } = useQuery({
        queryKey: ['rooms'],
        queryFn: async () => {
            try {
                const response = await axiosPublic.get('/rooms');
                return response.data;
            } catch (error) {
                console.error("Error fetching data:", error);
                throw error;
            }
        }
    });



    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };

// this is for show all the card

    useEffect(() => {
        setFilteredRooms(rooms); 
    }, [rooms]);

// this for filter the card 
  
    const filterRoomsByCategory = (category) => {

        if (category) {
            const filtered = rooms.filter(room => room.category === category);
            setFilteredRooms(filtered);
        } else {
            setFilteredRooms(rooms);
        }
    };

// this for search the card 

    const handleSearch = async(e) => {
        setSearchTerm(e.target.value);
        const filtered = await rooms.filter(room =>
            room.hotelName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            room.location.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredRooms(filtered);
    };


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <div className="bg-white min-h-screen">

            <div className="flex justify-center items-center gap-2">
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth
                        label="Room"
                        id="room"
                        value={searchTerm}
                        onChange={handleSearch} />

                </Box>

                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="five star" onClick={() => filterRoomsByCategory('five star')}>Five Star</ToggleButton>
                    <ToggleButton value="three star" onClick={() => filterRoomsByCategory('three star')}>Three Star</ToggleButton>
                    <ToggleButton value="normal"  onClick={() => filterRoomsByCategory('normal')}>Normal</ToggleButton>
                </ToggleButtonGroup>

                
               </div> 
                <div className="grid grid-cols-4 max-w-6xl gap-12 py-10 mx-auto  bg-white">
                    {filteredRooms.map((room, idx) => (
                        <div className="card card-compact w-72 h-96 bg-base-100 shadow-xl rounded-md" key={idx}>
                            <figure><img src={room.imageUrl} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold time">{room.hotelName}</h2>
                                <p className="text-sm text-zinc-400 time">{room.location}</p>
                                <div className="w-full h-[1px] bg-slate-200"></div>
                                <span className="flex justify-between items-center gap-14">
                                    <h3 className="text-xl text-slate-400">exclusive price</h3>
                                    <p className="text-3xl time font-semibold">{room.price} $</p>
                                </span>
                                <div className="w-full h-[1px] bg-slate-200"></div>
                                <p className="text-slate-400 time mt-2">{room.description && room.description.length > 200 ? room.description.slice(0, 100) + "..." : room.description}</p>
                                <div className="card-actions justify-start">
                                  <Link to={`/rooms/${room._id}`}>  <button className="w-20 h-9 time text-white font-bold bg-cyan-400 rounded-full hover:bg-teal-400 hover:rounded-md">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            );
};

            export default Rooms;