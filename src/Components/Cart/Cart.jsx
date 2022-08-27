
import Footer from "../Footer/Footer"
import Navbar from "../Navbar"
import "./productData.css"
function Cart(){
    let data =  JSON.parse(localStorage.getItem("myItems"))
    console.log(data)
     
    
    return(
        <div>
            <div><Navbar/></div>
            <div className='main-div'>
                {
                    data && data.map((el)=>{
                        return <div >
                     <div>
                        <div className="submain-div">
                          <img className="img" src={el.img}/>
                          <p className="name">{el.name}</p>
                          <p className="price">{el.price}</p>
                          <p className="rating">{el.rating}</p>
                          <div>
                          <button className="add-to-cart">Remove</button>
                          </div>
                       </div>
                    </div>
                        </div>
                  })
                }
               </div>
               <div>
                <Footer/>
               </div>
        </div>
    )
}
export default Cart;