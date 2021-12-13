import React from "react"
import { useContext } from "react"
import ContextProduct from "../context/ContextProducts"
import Products from "../context/ContextProducts"
import useDeleteProduct from "../context/ContextProducts"
import "./index.css";


const Cart = () => {
    /*const deleteProduct = useDeleteProduct()*/
    const { products } = useContext(ContextProduct)
  

   /* const deleteProductCart = (product) => {
        deleteProduct (product)
    }*/




    


    

    return (
        <div>
            {products?.map((product) => {   
                return (



                    <div className="cartContainer">
                        <h1>{product.name}</h1>
                        <img src={product.img} alt="" />
                        <h3>${product.price}</h3>
                        <button >Eliminar</button>
                    

                    </div>
                )

            })}S
        </div>
    )
}

export default Cart