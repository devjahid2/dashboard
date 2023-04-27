import React from 'react';
import InputOnly from '../form/InputOnly';

const TitleInput = ({placeholder,defaultValue,title,subtitle,btn,text}) => {
    return (
        <div className="d-md-flex align-items-center justify-content-between mb-4">
      <div className="label-text w-35">
        <h6 className="font-12">{title}</h6>
        <p className="font-11">{subtitle}</p>
      </div>
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 w-100">
        <InputOnly
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        {
            btn ? <button>Create token</button> : ''
        }
        {
          text ? <p className='font-11 mx-300'>{text}</p> : <p className='mx-300'></p>
        }
      </div>
    </div>
    );
}

export default TitleInput;
