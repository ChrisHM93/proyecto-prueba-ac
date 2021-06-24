import React from 'react';
import { Banner } from '../ui/Banner';
import { FootPage } from '../ui/FootPage';
import { UserNavbar } from '../ui/UserNavbar';

import './styles/reportScreen.css';
import { ImSearch } from "react-icons/im";


export const ReportScreen = () => {
    return (
        <div>
            <UserNavbar />
            <Banner title="Reporte individual de horas" />
            <div className="container-fluid mt-5 mb-5">
                <div className="row header-report">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <p>Datos del usuario</p>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-3">
                                <label className="labels-report">Nombre:</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-9">
                                <input type="text" value="Christian Uriel Herrera Munguia" />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-3 mt-2">
                                <label className="labels-report">Puesto:</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-9 mt-2">
                                <input type="text" value="Analista Prgramador" />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <p>Perdiodo de consulta</p>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-5">
                                <label className="labels-report">Fecha Inicial:</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-7">
                                <input type="text" value="21/06/2021" />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-5 mt-2">
                                <label className=" labels-report">Fecha Final:</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-7 mt-2">
                                <input type="text" value="25/06/2021" />
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <p>horas Totales</p>
                        <div className="row ">
                            <div className="col-sm-12 col-md-12 col-lg-5">
                                <label className="labels-report">Facturables</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-7">
                                <input type="text" value="20" />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-5 mt-2">
                                <label className="labels-report">No facturables</label>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-7 mt-2">
                                <input type="text" value="20" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <span className="labels"> #Por pagina </span>
                        <select className="form-select form-select-md" defaultValue="0">
                            <option value="0" >10</option>
                            <option value="1">20</option>
                            <option value="2">50</option>
                            <option value="3">100</option>
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 text-start">
                        <span className="labels"> Buscar actividad </span>
                        <div className="row">
                            <div className="col-10 ">
                                <input className="input-search rounded-pill" type="search" placeholder="Buscar" aria-label="Search" />
                            </div>
                            <div className="col-2 text-start">
                                <button className=" btn btn-warning rounded-circle" type="submit">
                                    <ImSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-container">
                    <table class="table table-style">
                        <thead>
                            <tr>
                                <th scope="col-1">#</th>
                                <th scope="col-2">Actividad</th>
                                <th scope="col-2">Subactividad</th>
                                <th scope="col-2">Descripcion</th>
                                <th scope="col-2">Semana</th>
                                <th scope="col-1">Horas dedicadas</th>
                                <th scope="col-2">Fecha de registro</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>Semana 2 </td>
                                <td>8 hrs</td>
                                <td>17/06/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>Semana 2 </td>
                                <td>8 hrs</td>
                                <td>17/06/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>Semana 2 </td>
                                <td>8 hrs</td>
                                <td>17/06/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>Semana 2 </td>
                                <td>8 hrs</td>
                                <td>17/06/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>Semana 2 </td>
                                <td>8 hrs</td>
                                <td>17/06/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>Semana 2 </td>
                                <td>8 hrs</td>
                                <td>17/06/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>Semana 2 </td>
                                <td>8 hrs</td>
                                <td>17/06/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>Semana 2 </td>
                                <td>8 hrs</td>
                                <td>17/06/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>Semana 2 </td>
                                <td>8 hrs</td>
                                <td>17/06/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Proyectos</td>
                                <td>Construccion y PU</td>
                                <td>Desarrollo P711</td>
                                <td>Semana 2 </td>
                                <td>8 hrs</td>
                                <td>17/06/2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-sm-2  col-md-2  col-lg-8 mt-1">
                        <span className="span"> Mostrando 1 -10 de 100 elementos</span>
                    </div>
                    <div className="col-sm-10  col-md-10  col-lg-4 text-end mt-2">
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
            <FootPage />

        </div>
    )
}
