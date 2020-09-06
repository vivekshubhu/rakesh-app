import React from 'react';
import Menu from './Menu';
import Style from './../styles/menu.module.css';
import { Link } from 'react-router-dom';

const Menus = (props) => {
    let pathname =  window.location.pathname.replace('/', '') ? window.location.pathname.replace('/', '') : 'Layout';
    return (
        <div className="d-flex flex-column justify-content-between">
            <Link to="/design" style={{'borderRadius':'5px'}} className={`${pathname.toLowerCase()==='design' ? Style.activeMenu : ''}`}>
                <Menu name="Design"  {...props} iconClass="fa-magic" />
            </Link>
            <Link to="/resize" style={{'borderRadius':'5px'}} className={`${pathname.toLowerCase()==='resize' ? Style.activeMenu : ''}`}>
                <Menu name="Resize" {...props} iconClass="fa-clone" />
            </Link>
            <Link to="/layout" style={{'borderRadius':'5px'}} className={`${pathname.toLowerCase()==='layout' ? Style.activeMenu : ''}`}>
                <Menu name="Layout" {...props} iconClass="fa-th-large" />
            </Link>
            <Link to="/template" style={{'borderRadius':'5px'}} className={`${pathname.toLowerCase()==='template' ? Style.activeMenu : ''}`}>
                <Menu name="Template" {...props} iconClass="fa-image" />
            </Link>
        </div>
    )
}

export default Menus
