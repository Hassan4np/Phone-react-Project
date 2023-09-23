import { useLoaderData } from "react-router-dom";
import Phon from "../Phon/Phon";


const Phones = ({phones}) => {

    return (
        <div>
            <h2 className="mb-5 text-center text-2xl mt-5">Our Phones Collections {phones.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5">
                {
                    phones.map((phn,idx)=><Phon key={idx} phon={phn}></Phon>)
                }
            </div>
        </div>
    );
};

export default Phones;