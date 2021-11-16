import "./index.css"

const itemListContainer = ({ greeting }) =>{
    return (
        <div className="saludo">
            <h1>{greeting}</h1>
            <p>Cerveza artesanal</p>
        </div>
    )
}

export default itemListContainer