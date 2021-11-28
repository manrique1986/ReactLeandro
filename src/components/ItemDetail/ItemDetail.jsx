
import { Fragment } from 'react'
import React from "react";
import "./Index.css";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({ name, img, detail }) => {
    return (

        <Fragment>

            <div className="detailContainer">

                <div className="detail">
                    <h1 className="detailName">{name}</h1>
                    <img className="detailImg" src={img} alt="" />
                    <p className="detailParrafo">{detail}</p>

                    <ItemCount />


                </div>

            </div>

        </Fragment>
    )
}


export default ItemDetail

