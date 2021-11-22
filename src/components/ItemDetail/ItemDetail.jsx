import React from "react";
import "./Index.css";

 export const ItemDetail = ({name, img, detail }) => {
    return (

        <div className="detailContainer">

            <div className="detail">
                <h1 className="detailName">{name}</h1>
                <img className="detailImg" src={img} alt="" />
                <p className="detailParrafo">{detail}</p>


            </div>

        </div>
    )
}

