import React from 'react';
import './form.css'
import './form_dark.css'
import './form_light.css'
const InputOnly = ({defaultValue,placeholder,data,setData,name,updatingObject}) => {
    // const text = 'privateSale'
    // const name = 'title'
    // const updatingObject = data[text];
    const handelValue = (e) => {
        setData({...data,[updatingObject]:{...data[updatingObject],[name]: e.target.value}});
    }
    return (
        <input  name={name} onChange={(e) => handelValue(e)} defaultValue={ data[updatingObject][name]|| ''} className='only' type="text" placeholder={placeholder} />
    );
}

export default InputOnly;
