import React from 'react';
import { useState } from 'react';

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { ModalMenu } from './ModalMenu';

export const ToogleButton = () => {
    const [show, setShow] = useState(false);
    
    
    const handleShowModal = () => {
        setShow(true);
    }
    
    
    const handleCloseModal = () => {
        setShow(false);
    }
    return (
        <>
            <div>
                <button 
                    className="toggle-menu btn-secondary text-center"
                    onClick={ handleShowModal }

                >
                    <i class="fa fa-bars fa-2x"></i>
                </button>
            </div>
            <ModalMenu show={ show } closeModal={ handleCloseModal } />
        </>
    )
}
