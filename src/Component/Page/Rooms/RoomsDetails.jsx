


const RoomsDetails = ({room}) => {

  
   

    return (

       <div className="bg-white mb-10">
         <div className="bg-white max-w-7xl mx-auto">
            <div className="bg-white max-w-7xl mx-auto py-6">
            <div className="hero  h-[500px]  bg-fixed backdrop-blur-0 relative " style={{
                backgroundImage:` url(${room.imageUrl})`,
                border: "none",
                borderRadius: "20px"
            }}>
                <div className="absolute inset-0 left-0 w-1/2 bg-gradient-to-r from-slate-800 via-transparent"   style={{ borderRadius: "20px" }}></div>
            </div>
            <p className="text-sm time text-green-400 ">{room.location}</p>
        </div>
        <h1 className="text-2xl font-semibold">{room.hotelName}</h1>
        <p className="w-[50%] my-4 text-gray-500">{room.description}</p>
        <div className="flex justify-start items-start gap-4">
            <h3 className="text-xl">Rooms Number- {room.roomNumber}</h3>
            <sup className="p-3 bg-green-600 text-white font-semibold rounded-sm">{room.category}</sup>
        </div>
        </div>
       </div>
    );
};

export default RoomsDetails;























// <div className="bg-white max-w-7xl mx-auto py-6">
// <div className="hero  h-[500px]  bg-fixed backdrop-blur-0 relative " style={{
//     backgroundImage:` url(${room.imageUrl})`,
//     border: "none",
//     borderRadius: "20px"
// }}>

//     <div className="absolute inset-0 left-0 w-1/2 bg-gradient-to-r from-slate-800 via-transparent"   style={{ borderRadius: "20px" }}></div>

   
//     <div className="hero-content text-center text-neutral-content">
        
//     </div>

// </div>
// </div>