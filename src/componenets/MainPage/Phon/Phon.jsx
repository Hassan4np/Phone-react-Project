import { NavLink } from "react-router-dom";


const Phon = ({ phon }) => {
    const { id, image, phone_name, brand_name, price, pating } = phon || {};
    return (
        <div className="relative flex w-96 h-[500px] flex-col border gap-2 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={image}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <h2 className="font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">{brand_name}</h2>
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {phone_name}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {price}
                    </p>
                </div>

            </div>
            <div className="p-6 pt-0">
                <NavLink to={`/phon/${id}`} state={phone_name} ><button
                    className="block w-full bg-slate-300 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    See Details
                </button></NavLink>
            </div>
        </div>
    );
};

export default Phon;