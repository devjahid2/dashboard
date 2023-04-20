import React, { useState } from 'react';
import './multiForm.css'
import MultiStepFormHead from './MultiStepFormHead';
import FormController from './FormController';

const MultiStepForm = ({children,step,bottomText}) => {
    const [presentStep,setPresentStep] = useState([1])
    return (
        <>
         <MultiStepFormHead presentStep={presentStep}  step={step}/>
         <FormController step={step} bottomText={bottomText} setPresentStep={setPresentStep} presentStep={presentStep} data={children}/>   
        </>
    );
}

export default MultiStepForm;
