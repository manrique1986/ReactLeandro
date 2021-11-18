import { useState } from "react";
import "./index.css";


function ItemCount (){
    const [number, setNumber]= useState(0)

    const onAdd = () =>{
        if ( number <  10 ){
            setNumber (number + 1)
        }
    }

    const onDecret = () =>{
        if ( number > 0 ){
            setNumber (number - 1)
        }
    }

    return (
        <div className = "contador" >
        <button className = "sumar"onClick={onAdd}>+</button>
        <h1 className = "numero"> {number}</h1>
        <button className = "restar"onClick={onDecret}>-</button>

       </div>      
            
            
    )
}
    
export default ItemCount