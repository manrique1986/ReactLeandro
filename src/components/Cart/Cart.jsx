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
            {products?.map((product, index) => {
                return (

                    <div   className="cart" key={product.id}>
                        <h1>{product.name}</h1>
                        <img src={product.img} alt="" />
                        <button onClick={() => deleteItem(product)}>Eliminar</button>
                    </div>
                )
            })}
            <div  className = "price">

            <h3>total ${}</h3>

            </div>

        </div>
    )
}

export default Cart