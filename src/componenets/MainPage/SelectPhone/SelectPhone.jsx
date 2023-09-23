import { NavLink, useLoaderData } from "react-router-dom";
import { GetLocalStrogeData } from "../Ulitlite/Utlity";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const SelectPhone = () => {
    const phndata = useLoaderData();
    const [phondata, setphondata] = useState([]);
    const [buttonhendle,setbuttonhendle] = useState(false)
    useEffect(() => {
        const phnid = GetLocalStrogeData();

        if (phnid.length > 0) {
            const selsctphn = phndata.filter(phn => phnid.includes(phn.id));
            setphondata(selsctphn);

        }
    }, [phndata])
    const hendleremoveditem = () => {
        setphondata([]);
        localStorage.clear();
    }

    return (
        <div>
            <h2 className="text-center mt-5 mb-5 text-2xl font-bold">All Phones:{phondata.length}</h2>
            <div className="text-center text-2x "><NavLink><button className="bg-green-500 px-3 rounded" onClick={hendleremoveditem}>All remoed data</button></NavLink></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    buttonhendle?phondata.map((phndata, idx) => <Card key={idx} card={phndata}></Card>)

                    :phondata.slice(0,2).map((phndata, idx) => <Card key={idx} card={phndata}></Card>)
                    
                }
            </div>
            <div className="text-center mt-5 mb-5 text-2xl font-bold ">
          {phondata.length>2 && <button className="border rounded-md px-5 bg-green-300 py-3" onClick={()=>setbuttonhendle(!buttonhendle)}>{buttonhendle?'See less':'See more'}</button>}
                </div>

        </div>
    );
};

export default SelectPhone;