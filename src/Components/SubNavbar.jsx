import { Link } from "react-router-dom";
function SubNavbar(){
    return(
  <div>
    <div style={{display:"flex",height:"50px",width:"100%",paddingTop:"10px"}}>
      <Link to="/products" style={{textDecoration:"none"}}>
      <p style={{paddingLeft:"50px",color:"grey"}}>
        MAKEUP
      </p>
      </Link>
      <p style={{paddingLeft:"50px",color:"grey"}}>
        BRUSHES
      </p>
      <p style={{paddingLeft:"50px",color:"grey"}}>
        SKINCARE
      </p>
      <p style={{paddingLeft:"50px",color:"grey"}}>
        GIFTING
      </p>
      <p style={{paddingLeft:"50px",color:"grey"}}>
        BLOG
      </p>
      <p style={{paddingLeft:"50px",color:"grey"}}>
        OFFERS
      </p>
      <p style={{paddingLeft:"50px",color:"grey"}}>
        STORES
      </p>
    </div>
  </div>
    )
}
export default SubNavbar;