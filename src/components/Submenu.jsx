import React from 'react';
import Style from './../styles/submenus.module.css';
import ResizeContent from './ResizeContent'
import TemplateContent from './TemplateContent';
import LayoutContent from './LayoutContent';
import { Route } from 'react-router-dom';

const Submenu = ({ header }) => {
    return (
            <div>
                <div className={Style.submenu}>
                    <p className={Style.header}>{header}</p>
                    <Route path="/" exact component={LayoutContent}/>
                    <Route path="/template" component={TemplateContent} />
                    <Route path="/resize" component={ResizeContent} />
                    <Route path="/layout" component={LayoutContent} />
                </div>
            </div>
    )
}

export default Submenu
