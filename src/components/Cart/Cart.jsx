import React from "react"
import { useContext } from "react"
import ContextProduct from "../context/ContextProducts.jsx"
import Products from "../context/ContextProducts"
import useDeleteProduct from "../context/ContextProducts"
import "./index.css";


const Cart = () => {
    const { products, deleteItem } = useContext(ContextProduct)
  

    return (
        <div>
            {products?.map((product,index) => {   
                return (

                    <div key={product.id}>
                        <h1>{product.name}</h1>
                        <img src={product.img} alt="" />
                        <h3>${product.price}</h3>
                        <button onClick={()=> deleteItem(product)}>Eliminar</button>
                    </div>
                )
            })}

        </div>
    )
}

export default Cart