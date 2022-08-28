import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import SubNavbar from "./SubNavbar";
function Navbar(){
    return(
        <div>
         <div style={{display:"flex",width:"100%",height:"80px",backgroundColor:"#efefef"}}>
          <img style={{height:"60px",paddingLeft:"60px",paddingTop:"15px"}}
           src="https://media.sugarcosmetics.com/upload/SUGARLogo1.png" alt=""/>
          <input style={{height:"40px",width:"550px",marginLeft:"80px",marginTop:"20px",border:"none",borderTopLeftRadius:"30px",borderBottomLeftRadius:"30px",paddingLeft:"20px"}} 
           type="text"
           placeholder='Try "Liquid Lipstick"' />
           <button style={{border:"none",backgroundColor:"black",height:"40px",width:"120px",marginTop:"20px",
             color:"white",borderTopRightRadius:"30px",borderBottomRightRadius:"30px",fontSize:"17px"}}>
            Search
            </button>
             <FaUser style={{marginTop:"35px",marginLeft:"100px"}}/>
             <Link to="/signin"><p style={{textDecoration:"underline", marginLeft:"5px", marginTop:"30px", color:"black"}}>Login/Register</p></Link>
             <FaHeart style={{marginTop:"35px",marginLeft:"100px",color:"gray"}}/>
             <Link to="/products/cart">
             <FaShoppingBag  style={{marginTop:"35px",marginLeft:"30px",color:"rgb(44, 43, 43)"}}/>
             </Link>
             <MdLocalOffer style={{marginTop:"35px",marginLeft:"30px"}}/>
         </div>
         <SubNavbar/>
        </div>
    )
}
export default Navbar;