import React from 'react';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './styles/banner.css';


export const Banner = ( {title} ) => {
    return (
        <>
            <Navbar className="nav-brand" >
                <h1 className="banner">
                    {title}
                </h1>
            </Navbar>
        </>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
}
