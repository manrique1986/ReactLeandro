
import "./item.css"
import { Link } from "react-router-dom"





const item = ({ item }) => {

    return (




        <div className="container" >

            <div className="card">
                <h3 className="cardTitle">{item.name}</h3>

                <img src={item.img} className="cardImg" alt="producto" />
                <div className="cardData">

                    <span className="cardPrice">${item.price}</span>
                </div>

                <Link to={`/product/${item.id} `}>

                    <p>detalle</p>
                </Link>

            </div>

        

        </div>



    )

}


export default item