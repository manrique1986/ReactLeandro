import { Fragment } from 'react';
import Item from '../Item/Item';

const Modal = ({items}) => {

    return (

        <Fragment>


            <div className="modal fade" id="myModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Estas a punto de tomarte una
                                buena birra, te pedimos disculpas, estamos sin stock. Volve mas tarde.</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="carritoModal">

                            {items.map((item) => {

                                return(

                                    <h1>
                                        hola

                                    </h1>
                                )

                                
                            })}


                        </div>
                        <div className="modal-footer">
                            <p>Total: $</p>
                            <p id="total"></p>
                            <button className="btn btn-danger" id="boton-vaciar">Vaciar</button>
                            <button type="button" class="btn btn-primary" id="buttonBuy">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>


    )
}


export default Modal