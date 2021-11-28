
import "./item.css"
import { Link } from "react-router-dom"





const item = ({ item }) => {

    return (

        <Link to= {`/product/${item.id}`}>
            

            <div className="container" >

                <div className="card">
                    <p className="cardTitle">{item.name}</p>

                    <img src={item.img} className="cardImg" alt="producto" />
                    <div className="cardData">

                        <span className="cardPrice">${item.price}</span>
                    </div>
                   

                    <Link to="#" className="cardButton">Agregar a carrito</Link>

                </div>


            </div>



        </Link>


    )

}


export default item