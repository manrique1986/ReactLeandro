import "./Header/header.css";

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