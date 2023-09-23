import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


const Mainpage = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar/>
            <Outlet></Outlet>
          
        </div>
    );
};

export default Mainpage;