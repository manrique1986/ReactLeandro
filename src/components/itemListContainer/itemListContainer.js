import "./Header/header.css";
import ItemList from "./itemList"

const itemListContainer = ({ saludo }) =>{
    return (
        <div className="saludo">
            <h1>{saludo}</h1>
            <p>Cerveza artesanal</p>
            <ItemList />
        </div>
    )
}

export default itemListContainer