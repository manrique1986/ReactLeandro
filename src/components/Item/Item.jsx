import ItemCount from "../ItemCount/ItemCount";
import "./item.css"




const item = ({ item }) => {

    return (

        <fragment>

            <div className="container" >
                <div className="card">
                    <p className="cardTitle">{item.name}</p>

                    <img src={item.img} className="cardImg" alt="producto" />
                    <div className="cardData">

                        <span className="cardPrice">${item.price}</span>
                    </div>
                    <ItemCount /> 

                    <a href="#" className="cardButton">Agregar a carrito</a>

                </div>

            </div>

         

        </fragment>


    )

}


export default item