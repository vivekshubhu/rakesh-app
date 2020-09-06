import React from 'react';
import Style from './../styles/submenus.module.css';
import ResizeContent from './ResizeContent'
import TemplateContent from './TemplateContent';
import LayoutContent from './LayoutContent';
import DesignContent from './DesignContent';
import { Route } from 'react-router-dom';

const Submenu = ({ header }) => {
    let pathname =  window.location.pathname.replace('/', '') ? window.location.pathname.replace('/', '') : 'Layout';
    // console.log(window.location.pathname);
    return (

            <div>
                <div className={Style.submenu}>
                    <p className={Style.header}>{header ? header :pathname.charAt(0).toUpperCase()+pathname.slice(1)}</p>
                    <Route path="/" exact component={LayoutContent}/>
                    <Route path="/template" component={TemplateContent} />
                    <Route path="/design" component={DesignContent} />
                    <Route path="/resize" component={ResizeContent} />
                    <Route path="/layout" component={LayoutContent} />
                </div>
            </div>
    )
}

export default Submenu
