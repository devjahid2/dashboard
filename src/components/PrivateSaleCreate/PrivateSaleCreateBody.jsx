import React from 'react';
import MultiStepForm from '../multiStepForm/MultiStepForm';
import BeforeStart from './CreateForm/BeforeStart';

const PrivateSaleCreateBody = () => {
    const stepData = [
        {name:'Before you start'},
        {name:'Private Sale'},
        {name:'Add Additional Info'},
        {name:'Finish'}
    ]
    return (
        <div className='mt-3'>
            <MultiStepForm step={stepData} bottomText={''}>
<BeforeStart/>
<div className="content py-4"><h2>Private Sale</h2></div>
                <div className="content py-4"><h2>Add Additional Info</h2></div>
                <div className="content py-4"><h2>Finish</h2></div>
            </MultiStepForm>
        </div>
    );
}

export default PrivateSaleCreateBody;
