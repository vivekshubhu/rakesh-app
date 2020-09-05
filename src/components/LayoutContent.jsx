import React from 'react';
import Style from './../styles/layout.module.css'

const LayoutContent = () => {
    return (
        <div className="layout">
            <div className="d-flex flex-wrap justify-content-between">
                <div className="pb-4 px-1">
                    <img className={Style.layoutSvg} src={require('./../images/layout1.svg')} alt="template" />
                </div>
                <div className="pb-4 px-1">
                    <img className={Style.layoutSvg} src={require('./../images/layout2.svg')} alt="template" />
                </div>
                <div className="pb-4 px-1">
                    <img className={Style.layoutSvg} src={require('./../images/layout3.svg')} alt="template" />
                </div>
                <div className="pb-4 px-1">
                    <img className={Style.layoutSvg} src={require('./../images/layout4.svg')} alt="template" />
                </div>
                <div className="pb-4 px-1">
                    <img className={Style.layoutSvg} src={require('./../images/layout5.svg')} alt="template" />
                </div>
                <div className="pb-4 px-1">
                    <img className={Style.layoutSvg} src={require('./../images/layout6.svg')} alt="template" />
                </div>
            </div>
        </div>
    )
}

export default LayoutContent
