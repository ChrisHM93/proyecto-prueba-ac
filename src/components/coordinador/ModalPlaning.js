import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';
import Swal from 'sweetalert2';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

export const ModalPlaning = ( {show, closeModal} ) => {

    const handleConfirm = () => {
        const alert = Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Registro guardado',
            showConfirmButton: false,
            timer: 1300
        })
    }

    return (
        <>
            <Modal
                //Valor booleano que se encarga de mostrar u ocultar el Modal
                isOpen={show}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={600}
                className="modal modal-planing"
                overlayClassName="modal-fondo"

            >
                <h2 className="modal-title">Registrar plan de actividades</h2>
                <hr></hr>
                <div className="div-form">
                    <form className="form">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Recurso</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccione un recurso</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Proyecto/Actividad</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccione un Proyecto/Actividad</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Mes</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccione un mes</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <table class="table table-style text-center">
                                <thead >
                                    <tr>
                                        <th scope="col-1">Semana</th>
                                        <th scope="col-2">Periodo</th>
                                        <th scope="col-4">Lunes</th>
                                        <th scope="col-1">Martes</th>
                                        <th scope="col-2">Miercoles</th>
                                        <th scope="col-2">Jueves</th>
                                        <th scope="col-2">Viernes</th>
                                        <th scope="col-2">Sabado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Semana 1
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="text" value="31/May - 4/Jun" disabled />
                                        </td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Semana 2
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="text" value="31/May - 4/Jun" disabled />
                                        </td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Semana 3
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="text" value="31/May - 4/Jun" disabled />
                                        </td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Semana 4
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="text" value="31/May - 4/Jun" disabled />
                                        </td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Semana 5
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="text" value="31/May - 4/Jun" disabled />
                                        </td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                        <td>8h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Horas planeadas   ***El input de abajo debe estar deshabilitado? o se registrara algo ahi
                            </label>
                            <input type="text" className="form-control" />
                        </div>
                    </form>
                </div>
                <hr></hr>
                <div className="row text-end">
                    <div className="col-9">
                        <button className="btn btns-foot btn-secondary" onClick={ closeModal }>Cancelar</button>
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btns-foot btn-success" onClick={ handleConfirm } >Guardar</button>
                    </div>
                </div>

            </Modal>
        </>
    )
}

ModalPlaning.propTypes = {
    show: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
}
