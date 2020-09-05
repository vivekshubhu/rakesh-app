import React from 'react';
import Style from './../styles/menu.module.css';

const Menu = ({name, iconClass}) => {
    return (
        <div className={`text-center ${Style.menu}`}>
            <i class={`fa fa-2x ${iconClass}`}></i>
            <p className="m-0 mt-2">{name}</p>
        </div>
    )
}

export default Menu
