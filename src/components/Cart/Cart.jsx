import React from "react"
import { useContext, useCallback } from "react"
import ContextProduct from "../context/ContextProducts.jsx"
import "./index.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom"


const Cart = () => {
    const { products, deleteItem, clearItems } = useContext(ContextProduct)



    const totales = useCallback(
        () => {
            let total = 0
            products.forEach(product => {
                total = total + product.price * product.quantity

            });
            return total
        },
        [products],

    )


    return ((products.length === 0) ?
        <>
            <h2 className="elijeProduct">Todavía no has elegido productos!!!</h2>
            <Link to="/productos"><button className=" volver btn btn-primary ">Volver a productos</button></Link>
            <img src="https://res.cloudinary.com/dytpump6i/image/upload/v1640113507/fondo_vufwbn.jpg" alt="imagen" ></img>
        </>
        :
        <div className="containerCart">
            {products?.map((product, index) => {
                return (

                    <div className="cart" key={product.id}>
                        <img className="imgCart" src={product.img} alt="" />
                        <h1 className="nameCart">{product.name}</h1>
                        <h4 className="priceCart">$ {product.price}</h4>
                        < ItemCount product={product} />
                        <button className="eliminar" onClick={() => deleteItem(product)}>Eliminar</button>
                    </div>
                )
            })}


            <section>
            <button className="borrar" onClick={() => clearItems()}>Eliminar todo</button>

                <h2 className="total">Total: ${
                    totales()}
                </h2>

                <Link to="/FinalizePurchase">
                <button className="terminar">Terminar compra</button>
                </Link>

            </section>


           


        </div>
        

    )

    
}



export default Cart