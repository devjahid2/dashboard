import React from 'react';

const CreateDescription = ({title,text,placeholder}) => {
    return (
        <div className="d-md-flex align-items-start description justify-content-between mb-4">
        <div className="label-text w-35 pt-3">
          <h6 className="font-12">{title}</h6>
        </div>
        <textarea name="description" id="description" placeholder={placeholder} cols="30" rows="5"></textarea>
        <div className="mx-300">
            <p className="font-11 ps-2">{text}</p>
        </div>
      </div>
    );
}

export default CreateDescription;
