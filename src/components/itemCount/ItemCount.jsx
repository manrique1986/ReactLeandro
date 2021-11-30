import { useState } from "react";
import "./index.css";


const ItemCount = ({addCart})=> {
    const [number, setNumber] = useState(0)

    const onAdd = () => {
        if (number < 10) {
            setNumber(number + 1)
        }
    }

    const onDecret = () => {
        if (number > 0) {
            setNumber(number - 1)
        }
    }


  

    return (
        <div className="contador" >

            <div className="cont">
                <button className="button" onClick={onDecret}>-</button>
                <h3 className="numero"> {number}</h3>
                <button className="button" onClick={onAdd}>+</button>

            </div>

            <div>
                <button disabled={number === 0} onClick={() => addCart(number)}
                >Agregar al carrito
                </button>
            </div>

        </div>


    )
}

export default ItemCount