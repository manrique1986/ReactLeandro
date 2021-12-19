
import { Fragment } from 'react'
import React from "react";
import "./Index.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom"




const ItemDetail = ({ product, irAlCarrito}) => {
    return (

        <Fragment>


            

            <img src={product.img} className="detailImg tilt-in-fwd-bl" alt="producto" />


            <div className="container1" >

                <div className="card1">
                    <h1 className="cardTitle1">{product.name}</h1>


                    <div className="cardData">

                        <p className="cardDetail">{product.detail}</p>

                        <span className="cardPrice">${product.price}</span>

                        {irAlCarrito ?
                         (<><Link to="/Cart">Terminar compra</Link></>) :
                            (<>< ItemCount product={product} /></>)}


                    </div>



                </div>


            </div>



        </Fragment>
    )
}


export default ItemDetail

