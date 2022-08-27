
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import Cart from "./Cart/Cart";
import { ProductData } from "./Cart/ProductData";
function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/signin" element={<SignIn/>}></Route>
                <Route path="/products/cart" element={<Cart/>}></Route>
                <Route path="/products" element={<ProductData/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;