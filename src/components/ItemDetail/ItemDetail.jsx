import React from "react";
import "./Index.css";

 export const ItemDetail = ({name, price , img }) => {
    return (

        <div className="detailContainer">

            <div className="detail">
                <h1 className="detailName">{name}</h1>
                <img src={img} alt="texto" />
                <p className="detailParrafo"> Las cervezas Honey se elaboran con miel, la que les aporta a un sabor dulce y azúcares
                    fermentables que elevan el contenido alcohólico de la cerveza. Las cervezas con miel son
                    algo turbias y especiadas. Además tiene un final seco.</p>


            </div>

        </div>
    )
}

