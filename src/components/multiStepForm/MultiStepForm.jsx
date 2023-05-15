import React, { useState } from 'react';
import './multiForm.css'
import MultiStepFormHead from './MultiStepFormHead';
import FormController from './FormController';

const MultiStepForm = ({children,step,bottomText,handler}) => {
    const [presentStep,setPresentStep] = useState([1]) // 1,2,3,4....n
    return (
        <>
         <MultiStepFormHead presentStep={presentStep}  step={step}/>
         <FormController handler={handler} step={step} bottomText={bottomText} setPresentStep={setPresentStep} presentStep={presentStep} data={children}/>   
        </>
    );
}

export default MultiStepForm;
