import React from 'react';
import Swal from 'sweetalert2';

import './styles/modal.css';

export const FormActivities = ( ) => {
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
            <h2 className="modal-title">Registrar Actividad</h2>
            <hr></hr>
            <div className="div-form">
                <form className="form">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Actividad</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Subactividad</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3 row">
                        <label for="exampleInputPassword1" className="form-label">Semana</label>
                        <div className="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col">
                            <input className="form-control" placeholder="01-Nov - 06-Nov" disabled />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Fecha de la actividad</label>
                        <input type="date" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Horas</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Descripcion</label>
                        <textarea type="text" className="form-control" />
                    </div>
                </form>
            </div>
            <hr></hr>
            <div className="row text-end">
                <div className="col-8">
                    <button  className="btn btns-foot btn-secondary" onClick="">Cancelar</button>
                </div>
                <div className="col-4">
                    <button type="submit" className="btn btns-foot btn-success" onClick={ handleConfirm }>Guardar</button>
                </div>
            </div>
        </>
    )
}
