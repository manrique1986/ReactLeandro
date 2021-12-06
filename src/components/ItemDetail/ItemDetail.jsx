
import { Fragment } from 'react'
import React from "react";
import "./Index.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom"




const ItemDetail = ({ name, img, detail, price, addCart, irAlCarrito }) => {
    return (

        <Fragment>

            <img src={img} className="detailImg tilt-in-fwd-bl" alt="producto" />


            <div className="container1" >

                <div className="card1">
                    <h1 className="cardTitle1">{name}</h1>


                    <div className="cardData">

                        <p className="cardDetail">{detail}</p>

                        {irAlCarrito ? (<><Link to="/Cart">Terminar compra</Link></>) :
                            (<>< ItemCount addCart={addCart} /></>)}


                    </div>

                </div>


            </div>




        </Fragment>
    )
}


export default ItemDetail

