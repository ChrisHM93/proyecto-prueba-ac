import React from 'react';
import './styles/banner.css';

import { ToogleButton } from './ToogleButton';

export const UserNavbar = () => {
    return (
        <div>
            <nav className="navbar nav navbar-dark">
                <div className="container-fluid">
                    <ToogleButton />
                    <button className="btn btn-danger h-60px">
                        <i class="fa fa-sign-out-alt fa-2x"></i>
                        <span> Cerrar sesion </span>
                    </button>
                </div>
            </nav>
        </div>
    )
}
