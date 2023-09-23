import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../componenets/MainPage/Mainpage";
import HomePage from "../componenets/MainPage/HomePage/HomePage";
import Phones from "../componenets/MainPage/Phones/Phones";
import ErrorPage from "../componenets/MainPage/ErrorPage/ErrorPage";
import Login from "../componenets/MainPage/Login/Login";
import PhoneDetails from "../componenets/MainPage/PhoneDetails/PhoneDetails";
import SelectPhone from "../componenets/MainPage/SelectPhone/SelectPhone";

const MyBrowser = createBrowserRouter ([
    {
        path:"/",
        element:<Mainpage/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<HomePage/>,
                loader:()=>fetch('/phon.json')
            },
            {
                path:"/phon/:id",
                element:<PhoneDetails/>,
                loader:()=>fetch('/phon.json')
              
             
            },
            {
               path:"/login",
               element:<Login></Login>
            },
            {
             path:"/selectPhone",
             element:<SelectPhone/>,
             loader:()=>fetch('/phon.json')
            }
        ]
    
    }
])
export default MyBrowser;