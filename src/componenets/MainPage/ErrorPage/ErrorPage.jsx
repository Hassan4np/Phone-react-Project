import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-center text-2xl mt-[100px]">data not fount</h2>
            <div className="text-center mt-[100px]">
            <NavLink className="text-center" to="/"><button className="btn ">Go Back</button></NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;