import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./header.css";

const Header = () => {
  return (
    <nav className="  navbar navbar-expand-lg navbar-light bg-light">
      <div className=" BarraNav container-fluid">
        <a className="navbar-brand " href="/Inicio">HALSEY</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/Inicio">Inicio</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Productos">Productos</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Galeria">Galeria</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">Contacto</Link>
            </li>
          </ul>

         <CartWidget />
        </div>
      </div>

    </nav>
  );
}

export default Header