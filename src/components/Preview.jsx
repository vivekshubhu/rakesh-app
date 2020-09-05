import React from 'react';
import Button from './Button';
import Image from './../images/image.jpg';
import Style from './../styles/preview.module.css';

const Preview = () => {
    return (
        <div>
            <div className="d-flex mb-2">
                <input type="text" style={{'outline':'none', 'width':'100%'}} />
                <Button name="Generate" />
            </div>
            <div className="img-wapper">
                <img className={Style.previewImg} src={Image} alt="preview" />
            </div>
            <div class="pt-4 d-flex justify-content-between">
                <Button name="Download" />
                <Button name="Share" />
            </div>
        </div>
    )
}

export default Preview