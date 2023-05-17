import React from 'react';

const CreateDescription = ({title,text,placeholder,data,setData,updatingObject}) => {
  const handelValue = (e) => {
    setData({...data,[updatingObject]:{...data[updatingObject],[e.target.name]: e.target.value}});
}
    return (
        <div className="d-md-flex align-items-start description justify-content-between mb-4">
        <div className="label-text w-35 pt-3">
          <h6 className="font-12">{title}</h6>
        </div>
        {
          (updatingObject && data && setData) ? <textarea defaultValue={data[updatingObject]['description']|| ''} onChange={(e) => handelValue(e)} name="description" id="description" placeholder={placeholder} cols="30" rows="5"></textarea>:
          <textarea name="description" id="description" placeholder={placeholder} cols="30" rows="5"></textarea>
        }
        <div className="mx-300">
            <p className="font-11 ps-2">{text}</p>
        </div>
      </div>
    );
}

export default CreateDescription;
