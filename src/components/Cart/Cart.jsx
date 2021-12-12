import { useContext } from "react"
import ContextProduct from "../context/ContextProducts"
import Products from "../context/ContextProducts"
import "./index.css";


const Cart = () => {
    const { products } = useContext(ContextProduct)
    const productContext = useContext(Products)




    


    

    return (
        <div>
            {products?.map((product) => {   
                return (



                    <div className="cartContainer">
                        <h1>{product.name}</h1>
                        <img src={product.img} alt="" />
                        <h3>${product.price}</h3>
                        <button onClick={() =>productContext.deleteFromProduct(product)} >Eliminar</button>
                    

                    </div>
                )

            })}S
        </div>
    )
}

export default Cart