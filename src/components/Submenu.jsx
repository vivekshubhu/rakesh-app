import React from 'react';
import Style from './../styles/submenus.module.css';
import ResizeContent from './ResizeContent'
import TemplateContent from './TemplateContent';
import LayoutContent from './LayoutContent';
import { Route } from 'react-router-dom';

const Submenu = () => {
    const url = window.location.href;
    const header = new URL(url).pathname.replace(/^\/+|\/+$/g, '');
    return (
            <div>
                <div className={Style.submenu}>
                    <p className={`text-capitalize ${Style.header}`}>{header?header:'Layout'}</p>
                    <Route path="/" exact component={LayoutContent}/>
                    <Route path="/template" component={TemplateContent} />
                    <Route path="/resize" component={ResizeContent} />
                    <Route path="/layout" component={LayoutContent} />
                </div>
            </div>
    )
}

export default Submenu
