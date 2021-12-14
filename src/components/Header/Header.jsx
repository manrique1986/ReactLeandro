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
            <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/Productos" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/Productos">Todos</Link></li>
            <li><Link className="dropdown-item" to="/category/dulce">Sabor dulce</Link></li>
            <li><Link className="dropdown-item" to="/category/amarga">Sabor amarga</Link></li>

          </ul>
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