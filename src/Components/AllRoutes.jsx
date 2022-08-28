
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import Cart from "./Cart/Cart";
import { ProductData } from "./Cart/ProductData";
import { Lipstick } from "./Cart/Lipstick";
function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/signin" element={<SignIn/>}></Route>
                <Route path="/products/cart" element={<Cart/>}></Route>
                <Route path="/products" element={<ProductData/>}></Route>
                <Route path="/lipstick" element={<Lipstick/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;