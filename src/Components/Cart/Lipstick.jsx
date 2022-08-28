
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import "./productData.css"
import axios from 'axios'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
// import {useCart} from "react-use-cart"

export const Lipstick = () => {
 const {id}=useParams();
 const navigate=useNavigate();
    const [data,setData] = useState([])   
    useEffect (()=>{
     axios.get("http://localhost:8080/Lipstick").then((res)=>{
        setData(res.data)
     })
   
            
    },[])

    // const { addItem, items } = useCart();
    let handleAdd = (id)=>{
        let newdata=data.filter((el)=>{
            return id==el.id
        })

        const items = JSON.parse(localStorage.getItem("myItems")) || [];
        const newItems = JSON.stringify([...items,newdata[0]])
        localStorage.setItem("myItems",newItems);
        alert( "item added to the cart")
        navigate("/products/cart")
      }
    
      
    return (
        <div className='data'>
            <div>
                <Navbar/>
            </div>
               <div className='main-div'>
                {
                    data && data.map((el)=>{
                        return <div >
                        <div >
                             <div className='submain-div'>
                               <img className='img' src={el.img}/>
                               <p className='name'>{el.name}</p>
                               <p className='price'>{el.price}</p>
                               <p className='rating'>Rating:{el.rating}</p>
                               <div>
                                <button className='add-to-cart' onClick={()=>{handleAdd(el.id)}}>ADD TO CART</button>
                                
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