import { useLoaderData } from "react-router-dom";
import Bannar from "../Bannar/Bannar";
import Phones from "../Phones/Phones";


const HomePage = () => {
    const phones = useLoaderData()
    return (
        <div>
      <Bannar />
      <Phones phones={phones}/>
        </div>
    );
};

export default HomePage;