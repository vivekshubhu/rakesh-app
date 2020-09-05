import React from 'react';
import Style from './../styles/submenus.module.css';
import ResizeContent from './ResizeContent'
import TemplateContent from './TemplateContent'

const Submenu = ({ header }) => {
    return (
        <div>
            <div className={Style.submenu}>
                <p className={Style.header}>{header}</p>
                {/* <ResizeContent /> */}
                <TemplateContent />
            </div>
        </div>
    )
}

export default Submenu
