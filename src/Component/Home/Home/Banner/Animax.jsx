import { Divider } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";



const Animax = () => {




  return (

      <div className="max-w-7xl  bg-gradient-to-r from-slate-800  to-slate-500 bg-opacity-25 absolute z-50 px-20 py-14 rounded-md  translate-y-56 shadow-xl">
        <div className="flex justify-center items-center gap-10">
          <div>
            <h4 className="text-2xl text-white">Location</h4>
            <p className="text-sm text-slate-400">Where are you going</p>
          </div>
          <Divider sx={{bgcolor:'white'}} orientation="vertical" variant="fullWidth" flexItem />
          <div>
            <h4 className="text-2xl text-white">Check in</h4>
            <p className="text-sm text-slate-400">add check</p>
          </div>
          <Divider sx={{bgcolor:'white'}} orientation="vertical" variant="fullWidth" flexItem />
          <div>
            <h4 className="text-2xl text-white">Check out</h4>
            <p className="text-sm text-slate-400 ">add check</p>
          </div>
          <Divider sx={{bgcolor:'white'}} orientation="vertical" variant="fullWidth" flexItem />
          <div>
            <h4 className="text-2xl text-white">Guests</h4>
            <p className="text-sm text-slate-400 ">add guests</p>
          </div>
          <Divider sx={{bgcolor:'white'}} orientation="vertical" variant="fullWidth" flexItem />
          <div className="bg-white p-5 rounded-full">
          <Link to="/booking"> <FaSearch className=" w-6 h-6 "/></Link>
          </div>
        </div>
      </div>


  );
};

export default Animax;
