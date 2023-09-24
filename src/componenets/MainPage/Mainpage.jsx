import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useEffect } from "react";



const Mainpage = () => {
 const loc = useLocation();
 useEffect(()=>{
   
   if(loc.pathname==="/"){
    document.title = "phone-phon"
   }else{
    document.title = `phone${loc.pathname.replace('/','-')}`
   }
   if(loc.state){
    document.title =`${loc.state}`
   }
 },[loc.pathname,loc.state])
 
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar/>
            <Outlet></Outlet>
          
        </div>
    );
};

export default Mainpage;