import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { SaveLocalStargedata } from "../Ulitlite/Utlity";
import swal from "sweetalert";


const PhoneDetails = () => {
    const phoneDetails = useLoaderData();
    const { id } = useParams();
    const [phndetails, setphndetails] = useState({});
    useEffect(() => {
        const phndetail = phoneDetails.find(phn => phn.id === id);
        setphndetails(phndetail)
    }, [phoneDetails, id]);

    const HendleAddData = (id) => {
        SaveLocalStargedata(id)
       
    }

    return (
        <div>
            <div className="h-[150px] text-center flex justify-center items-center bg-green-200 mt-5">
                <h2>Phone  detais</h2>
            </div>
            <div className="flex justify-center items-center mt-10">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={phndetails.image}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="p-6">
                            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                {phndetails.brand_name}
                            </h6>
                            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {phndetails.phone_name}
                            </h4>

                            <a className="inline-block" href="#">
                                <NavLink><button onClick={() => HendleAddData(phndetails.id)}
                                    className="flex select-none bg-green-200 items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Add to Favorits
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button></NavLink  >
                               <div className="text-center bg-gray-400 py-2 rounded-md mt-2 font-bold"><NavLink to="/"> <button className="text-center">Home</button></NavLink></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default PhoneDetails;