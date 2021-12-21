
import "./item.css"
import { Link } from "react-router-dom"
import React from "react"





const item = ({ item }) => {

    return (




        <div className="container" >

            <div className="card">
                <h3 className="cardTitle">{item.name}</h3>

                <img src={item.img} className="cardImg" alt="producto" />
                <div className="cardData">
                </div>

                <Link to={`/product/${item.id} `}>

                    <p>detalle</p>
                </Link>

            </div>

        

        </div>



    )

}


export default item