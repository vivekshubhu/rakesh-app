import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Menus = () => {
    return (
        <div className="d-flex flex-column justify-content-between">
            <Menu name="Design" iconClass="fa-magic" />
            <Link to="/resize">
                <Menu name="Resize" iconClass="fa-clone" />
            </Link>
            <Link to="/layout">
                <Menu name="Layout" iconClass="fa-th-large" />
            </Link>
            <Link to="/template">
                <Menu name="Templates" iconClass="fa-image" />
            </Link>
        </div>
    )
}

export default Menus
