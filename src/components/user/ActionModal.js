

import React from 'react';
import Modal from 'react-modal';

import PropTypes from 'prop-types';
import { FormActivities } from './FormActivities';
import Swal from 'sweetalert2';
import './styles/modal.css';




//Estilo para que el modal se muestre al centro de la pantalla
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
//Para renderizar el modal
Modal.setAppElement('#root');
export const ActionModal = ( {show, closeModal} ) => {


    return (
        <>
            <Modal
                //Valor booleano que se encarga de mostrar u ocultar el Modal
                isOpen={show}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={600}
                className="modal-activities"
                overlayClassName="modal-fondo"

            >
                <FormActivities />
            </Modal>
        </>
    )
}

ActionModal.propTypes = {
    show: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
}
