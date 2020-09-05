import React from 'react';
import Menu from './Menu';

const Menus = () => {
    return (
        <div className="d-flex flex-column justify-content-between">
            <Menu name="Design" iconClass="fa-magic" />
            <Menu name="Resize" iconClass="fa-clone" />
            <Menu name="Layout" iconClass="fa-th-large" />
            <Menu name="Templates" iconClass="fa-image" />
        </div>
    )
}

export default Menus
