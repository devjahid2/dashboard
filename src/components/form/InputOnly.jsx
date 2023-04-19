import React from 'react';
import './form.css'
import './form_dark.css'
import './form_light.css'
const InputOnly = ({defaultValue,placeholder}) => {
    return (
        <input defaultValue={defaultValue ? defaultValue : ''} className='only' type="text" placeholder={placeholder} />
    );
}

export default InputOnly;
