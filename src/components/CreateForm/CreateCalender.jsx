import React from 'react';
import Calender from '../calender/Calender';
import './style.css'
import { icons } from '../../assets/icons/icon';
const CreateCalender = ({placeholder,title,text,placeholder2}) => {
    return (
        <div className="d-md-flex align-items-center justify-content-between mb-4">
        <div className="label-text w-35">
          <h6 className="font-12">{title}</h6>
        </div>
        <div className="d-flex align-items-center gap-2 w-100 under-w-50">
          <Calender placeholder={placeholder}/>
          <img src={icons.dash} alt="dash" />
          <Calender placeholder={placeholder2}/>
        </div>
        <div className="mx-300">
            <p className="font-11 ps-2">{text}</p>
        </div>
      </div>
    );
}

export default CreateCalender;
