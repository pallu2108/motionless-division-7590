
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";


function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/signin" element={<SignIn/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;