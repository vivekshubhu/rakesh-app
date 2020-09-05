import React from 'react';
import Style from './../styles/template.module.css'

const TemplateContent = () => {
    return (
        <div className="templates">
            <div className="d-flex flex-wrap">
                <div className="p-1">
                    <img className={Style.templateImage} src={require('./../images/template1.jpg')} alt="template" />
                </div>
                <div className="p-1">

                    <img className={Style.templateImage} src={require('./../images/template2.jpg')} alt="template" />
                </div>
                <div className="p-1">
                    <img className={Style.templateImage} src={require('./../images/template3.jpg')} alt="template" />
                </div>
                <div className="p-1">
                    <img className={Style.templateImage} src={require('./../images/template4.jpg')} alt="template" />
                </div>
            </div>
        </div>
    )
}

export default TemplateContent
