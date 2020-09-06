import React from 'react';
import Style from './../styles/menu.module.css';

const Menu = ({name, iconClass, getSubmenuHeader}) => {
    return (
        <div className={`text-center ${Style.menu}`} onClick={e => getSubmenuHeader(name)}>
            <i className={`fa fa-2x ${iconClass}`}></i>
            <p className="m-0 mt-2">{name}</p>
        </div>
    )
}

export default Menu
