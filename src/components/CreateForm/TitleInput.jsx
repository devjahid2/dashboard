import React from 'react';
import InputOnly from '../form/InputOnly';

const TitleInput = ({placeholder,value,title,subtitle,btn}) => {
    return (
        <div className="d-md-flex align-items-center justify-content-between mb-4">
      <div className="label-text w-35">
        <h6 className="font-12">{title}</h6>
        <p className="font-11">{subtitle}</p>
      </div>
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 w-100">
        <InputOnly
          placeholder={placeholder}
          defaultValue={value}
        />
        {
            btn ? <button>Create token</button> : ''
        }
      </div>
    </div>
    );
}

export default TitleInput;
