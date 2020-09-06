import React from 'react';
import Button from './Button';
import Image from './../images/image.jpg';
import Style from './../styles/preview.module.css';

const Preview = () => {
    return (
        <div>
            <div className="d-flex mb-2">
                <input type="text" placeholder='Write Something' className={Style.generateInput} />
                <Button name="Generate" />
            </div>
            <div className="img-wapper">
                <img className={Style.previewImg} src={Image} alt="preview" />
            </div>
            <div className="pt-4 d-flex justify-content-between">
                <Button name="Download" />
                <Button name="Share" />
            </div>
        </div>
    )
}

export default Preview
