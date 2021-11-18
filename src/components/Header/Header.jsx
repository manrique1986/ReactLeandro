import Carrito from "../Carrito/Carrito";
import "./header.css";

const Header = () => {
  return (
    <nav className="  navbar navbar-expand-lg navbar-light bg-light">
      <div className=" BarraNav container-fluid">
        <a className="navbar-brand " href="#">HALSEY</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link texto" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Galeria</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>

         <Carrito />
        </div>
      </div>

    </nav>
  );
}

export default Header