import { React, useState } from 'react';
import { Banner } from '../ui/Banner';
import { FootPage } from '../ui/FootPage';
import { FcPlus } from "react-icons/fc";
import { ActionModal } from './ActionModal';
import { FcSurvey, FcCancel } from "react-icons/fc";
import { UserNavbar } from '../ui/UserNavbar';


import Swal from 'sweetalert2';
import './styles/userScreen.css';


export const UserScreen = () => {

    const [show, setShow] = useState(false);

    const handleShowModal = () => {
        setShow(true);
    }
    const handleCloseModal = () => {
        setShow(false);
    }

    const handleAlert = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Seguro que quieres eliminar esta actividad?',
            text: "Esta accion no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Registro eliminado!!',
                )
            }
        })
    }

    return (
        <>
            <UserNavbar />

            <Banner title="Actividades Realizadas" />

            <div className="container container-ac mt-3">
                <span className="labels"> #Por pagina </span>
                <div className="row">
                    <div className="col-sm-2  cosl-md-2  col-lg-2 text-end mt-2">
                        <select className="form-select form-select-md" defaultValue="0">
                            <option value="0" >10</option>
                            <option value="1">20</option>
                            <option value="2">50</option>
                            <option value="3">100</option>
                        </select>
                    </div>
                    <div className="col-sm-10  cosl-md-10  col-lg-10 text-end mt-2">
                        <button
                            onClick={handleShowModal}
                            className="btn btn-success labels"
                        >
                            <FcPlus />
                            Registrar actividad
                        </button>
                    </div>
                </div>
                <div className="table-container">
                    <table class="table table-style">
                        <thead>
                            <tr>
                                <th scope="col-1">#</th>
                                <th scope="col-2">Actividad</th>
                                <th scope="col-2">Subactividad</th>
                                <th scope="col-4">Descripcion</th>
                                <th scope="col-1">Horas</th>
                                <th scope="col-2">Fecha</th>
                                <th scope="col-2">Modificacion</th>
                                <th scope="col-2">Baja</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>8</td>
                                <td>17/06/2021</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-outline-warning w-50"
                                        onClick={handleShowModal}
                                    >
                                        <FcSurvey />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                        onClick={handleAlert}
                                    >
                                        <FcCancel />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>8</td>
                                <td>17/06/2021</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-outline-warning w-50"
                                    // onClick={handleShow}
                                    >
                                        <FcSurvey />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                    // onClick={handleAlert}
                                    >
                                        <FcCancel />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>8</td>
                                <td>17/06/2021</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-outline-warning w-50"
                                        onClick={handleShowModal}
                                    >
                                        <FcSurvey />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                    // onClick={handleAlert}
                                    >
                                        <FcCancel />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>8</td>
                                <td>17/06/2021</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-outline-warning w-50"
                                    // onClick={handleShow}
                                    >
                                        <FcSurvey />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                    // onClick={handleAlert}
                                    >
                                        <FcCancel />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>8</td>
                                <td>17/06/2021</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-outline-warning w-50"
                                    // onClick={handleShow}
                                    >
                                        <FcSurvey />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                    // onClick={handleAlert}
                                    >
                                        <FcCancel />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>8</td>
                                <td>17/06/2021</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-outline-warning w-50"
                                    // onClick={handleShow}
                                    >
                                        <FcSurvey />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                    // onClick={handleAlert}
                                    >
                                        <FcCancel />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>8</td>
                                <td>17/06/2021</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-outline-warning w-50"
                                    // onClick={handleShow}
                                    >
                                        <FcSurvey />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                    // onClick={handleAlert}
                                    >
                                        <FcCancel />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>8</td>
                                <td>17/06/2021</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-outline-warning w-50"
                                    // onClick={handleShow}
                                    >
                                        <FcSurvey />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                    // onClick={handleAlert}
                                    >
                                        <FcCancel />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>8</td>
                                <td>17/06/2021</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-outline-warning w-50"
                                    // onClick={handleShow}
                                    >
                                        <FcSurvey />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                    // onClick={handleAlert}
                                    >
                                        <FcCancel />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>8</td>
                                <td>17/06/2021</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-outline-warning w-50"
                                    // onClick={handleShow}
                                    >
                                        <FcSurvey />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                    // onClick={handleAlert}
                                    >
                                        <FcCancel />
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-sm-2  col-md-2  col-lg-8 mt-1">
                        <span className="span"> Mostrando 1 -10 de 100 elementos</span>
                    </div>
                    <div className="col-sm-10  cosl-md-10  col-lg-4 text-end mt-2">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-end">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <ActionModal show={show} closeModal={handleCloseModal} />
            <FootPage />
        </>
    )
}
