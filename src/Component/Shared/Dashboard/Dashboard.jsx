import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../../Hook/useAdmin";




const Dashboard = () => {


const [isAdmin, isAdminLoading] = useAdmin()



if(isAdminLoading){
    <span className="loading loading-spinner loading-md"></span>
}



    return (
      <div className="flex bg-white">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-teal-600 ">
          <ul className="menu p-6">
              {
                  isAdmin ? <>
                      <li>
                          <NavLink to="/dashboard/adminHome">
                              <FaHome></FaHome>
                              Admin Home</NavLink>
                      </li>
                      <li>
                          <NavLink to="/dashboard/addItems">
                          <MdOutlinePlaylistAdd />
                              Add Items</NavLink>
                      </li>
                      <li>
                          <NavLink to="/dashboard/manageItems">
                              <FaList></FaList>
                              Manage Items</NavLink>
                      </li>
                      <li>
                          <NavLink to="/dashboard/bookings">
                              <FaBook></FaBook>
                              Manage Bookings</NavLink>
                      </li>
                      <li>
                          <NavLink to="/dashboard/users">
                              <FaUsers></FaUsers>
                              All Users</NavLink>
                      </li>
                  </>
                      :
                      <>
                          <li>
                              <NavLink to="/dashboard/userHome">
                                  <FaHome></FaHome>
                                  User Home</NavLink>
                          </li>
                          <li>
                              <NavLink to="/dashboard/history">
                                  <FaCalendar></FaCalendar>
                                  Not History</NavLink>
                          </li>
        
                          <li>
                              <NavLink to="/dashboard/review">
                                  <FaAd></FaAd>
                                  Add a Review</NavLink>
                          </li>
                          <li>
                              <NavLink to="/dashboard/paymentHistory">
                                  <FaList></FaList>
                                  Real Payment History</NavLink>
                          </li>
                      </>
              }
              {/* shared nav links */}
              <div className="divider"></div>
              <li>
                  <NavLink to="/">
                      <FaHome></FaHome>
                      Home</NavLink>
              </li>
              <li>
                  <NavLink to="/order/contact">
                      <FaEnvelope></FaEnvelope>
                      Contact</NavLink>
              </li>
          </ul>
      </div>
     
      <div className="flex-1 p-8">
          <Outlet></Outlet>
      </div>
  </div>
    );
};

export default Dashboard;