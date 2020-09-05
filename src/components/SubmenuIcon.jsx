import React from 'react'
import Style from './../styles/submenus.module.css';

const SubmenuIcon = ({ iconClass, name }) => {
    return (
        <div className="mb-5">
            <div className={`text-center ${Style.socialIcon}`}>
                <i class={`fa ${iconClass} fa-2x }`}></i>
            </div>
            <p className="my-2">{name}</p>
        </div>
    )
}

export default SubmenuIcon
