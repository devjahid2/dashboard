import React from 'react';
import SelectInput from '../form/SelectInput';
import './style.css'
const CreateSelect = ({title,options,placeholder}) => {
    return (
        <div className="d-md-flex align-items-center justify-content-between mb-4">
        <div className="label-text w-35">
          <h6 className="font-12">{title}</h6>
        </div>
        {/* <div className="d-flex align-items-center gap-4 w-100"> */}
          <SelectInput placeholder={placeholder} options={options}/>
        {/* </div> */}
        <div className="mx-300"></div>
      </div>
    );
}

export default CreateSelect;
