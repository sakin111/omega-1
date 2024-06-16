import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import { useContext } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (user) {
      Swal.fire({
        text: "The user is already logged in",
        customClass: {},
        position: 'top',
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      navigate("/login");
    }
  };

  const nav = (
    <>
      <span className="gradient-text font-bold font-sans gradient-border pb-2">
        <Link to="/">Home</Link>
        <span className="gradient-border"></span>
      </span>
      <span className="gradient-text font-bold font-sans gradient-border">
        <Link to="/rooms">Rooms & Suites</Link>
        <span className="gradient-border"></span>
      </span>
      <span className="gradient-text font-bold font-sans gradient-border">
        <Link to="/dashboard">Dashboard</Link>
        <span className="gradient-border"></span>
      </span>
    </>
  );

  return (
    <div className="navbar bg-white border-none px-10 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {nav}
          </ul>
        </div>

        <div className="flex justify-center items-center gap-7">
          <img src="https://i.ibb.co/D1sjVt6/Gemini-Generated-Image-pqjb8tpqjb8tpqjb-removebg-preview.png" alt="logo" className="w-12 h-12 rounded-full" />
          <h3 className="text-black font-dancing-script border-l-2 border-slate-950 pl-7 text-2xl">MOTELA</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {nav}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <button
            size="medium"
            className="btn m-1 text-white bg-gradient-to-br from-teal-400 to-cyan-500 hover:bg-gradient-to-bl font-medium rounded-lg px-4 py-2.5 font-mono"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user ? (
                <img src={user.photoURL} alt="profile" />
              ) : (
                <img src="https://i.ibb.co/j3K22W2/profile-user-64572.png" alt="placeholder" />
              )}
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            {user && (
              <>
                <li>
                  <Link to={`/profile/${user._id}`} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={logOut}>
                  <a>Logout</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
