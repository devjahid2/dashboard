import React from 'react'
import Select from 'react-select'




const SelectInput = ({placeholder,options,data,setData,updatingObject,name}) => {
    const handleSelect = (e) => {
        setData({...data,[updatingObject]:{...data[updatingObject],[name]: e.value}});
    }
    return (
        <>
            {
                (data && setData && updatingObject && name) ? <Select onChange={(e) => handleSelect(e)} placeholder={placeholder} options={options} /> : <Select  placeholder={placeholder} options={options} />
            }
        </>
    );
}

export default SelectInput;
