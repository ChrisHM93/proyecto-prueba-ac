import React from 'react';

import PropTypes from 'prop-types';
import Modal from 'react-modal';

//  const customStyles = {
//      content: {
//          top: '5%',
//          left: '5%',
//          right: '-15px',
//          bottom: 'auto',
// //         heigth: '100%',
// //         marginRight: '-50%',
//         //  transform: 'translate(0%, 0%)'
//      }
//  };

Modal.setAppElement('#root');

export const ModalMenu = ({ show, closeModal }) => {
    return (
        <>

            <Modal
                //Valor booleano que se encarga de mostrar u ocultar el Modal
                isOpen={show}
                onRequestClose={closeModal}
                // style={customStyles}
                closeTimeoutMS={600}
                className="modal-menu"
                overlayClassName="modal-fondo"

            >
                <div className="row header-modal-menu">
                    <div className="col-10">
                        <span>
                            nombre del usuario
                        </span>
                    </div>
                    <div className="col-2">

                    </div>

                </div>
            </Modal>
        </>
    )
}

ModalMenu.propTypes = {
    show: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
}
