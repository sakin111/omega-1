import { Outlet, useLocation } from "react-router-dom";
import Header from "../Component/Home/Header/Header";
import Footer from "../Component/Home/Footer/Footer";


const Main = () => {

  const location = useLocation()

  const noHeaderFooter = location.pathname.includes('login') || 
  location.pathname.includes('signup') || 
  location.pathname.includes('/slider/');



    return (
   <div >
      {noHeaderFooter || <Header />}
      <Outlet></Outlet>
      { noHeaderFooter || <Footer></Footer>}
   </div>
    );
};

export default Main;




