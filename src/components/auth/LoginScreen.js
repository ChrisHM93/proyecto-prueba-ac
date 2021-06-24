import React, { useState } from 'react';

import { Button, Navbar, Container, Row, Modal, Col, Form } from 'react-bootstrap';
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { Banner } from '../ui/Banner';

import './styles/login.css';

export const LoginScreen = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Banner title="Inicio de Sesión - Control de Actividades" />
            <div className="text-center" style={{ marginTop: '30px' }}>
                <img src=".\assets\user-logo.png" alt="User Login" />
            </div>
            <div className="main-container-center">
                <form className="container">
                    <div className="mb-3 form-group">
                        <label for="exampleInputEmail1" className="labels">
                            <BsFillPersonFill />
                            Nombre de usuario
                        </label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3 form-group">
                        <label for="exampleInputPassword1" class="labels">
                            <RiLockPasswordLine />
                            Contraseña
                        </label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="mb-3 ">
                        <label className="labels" for="exampleCheck1">
                            <input type="checkbox" className="form-check-input" />
                            Recordarme
                        </label>
                    </div>
                </form>
            </div>
            <div className="mt-2 text-center">
                <button className="btn btn-success btn-login labels">Iniciar Sesión</button>
            </div>

            <Navbar className="nav-brand" fixed='bottom' style={{ justifyContent: 'center' }} >
                <Navbar.Brand>
                    <Row style={{ color: 'white' }}>
                        <span className="labels">
                            ¿Olvidaste tu contraseña?
                        </span>
                        {/* <img src={recuperaIcon}/> */}
                    </Row>
                    <Row className="text-center">
                        <a className="cursor-pointer labels" onClick={handleShow} style={{ color: 'white', textDecorationStyle: 'none' }}>
                            Recuperar Contraseña
                        </a>
                    </Row>
                </Navbar.Brand>
            </Navbar>


            {/* ---------MODAL-------- */}
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Recuperar contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                                Correo Electronico
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="email" placeholder="nombre.usiario@zuma-ti.mx" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Recuperar contraseña
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
