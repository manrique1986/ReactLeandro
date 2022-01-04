
import { Fragment } from 'react'
import React from "react";
import "./Index.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom"
import { useContext } from "react"
import ContextProduct from "../context/ContextProducts"




const ItemDetail = ({ product, irAlCarrito }) => {


    const { addItem } = useContext(ContextProduct)
    return (

        <Fragment>




            <img src={product.img} className="detailImg tilt-in-fwd-bl" alt="producto" />


            <div className="container1" >

                <div className="card1">
                    <h1 className="cardTitle1">{product.name}</h1>


                    <div className="cardData">

                        <p className="cardDetail">{product.detail}</p>

                        <span className="cardPrice">${product.price}</span>

                        <div>
                            <button className="carrito" onClick={() => addItem(product)}
                            >Agregar al carrito
                            </button>
                        </div>





                    </div>



                </div>





            </div>

            <Link to="/productos">
                <button class="btn btn-primary">Elegir otro producto</button>
            </Link>




        </Fragment>
    )
}


export default ItemDetail

