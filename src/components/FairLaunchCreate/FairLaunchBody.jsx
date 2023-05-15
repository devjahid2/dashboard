import React from 'react';
import MultiStepForm from '../multiStepForm/MultiStepForm';
import VerifyToken from './CreateForm/VerifyToken';

const FairLaunchBody = () => {
    const stepData = [
        {name:'Verify token'},
        {name:'DeFI FairLaunch Info'},
        {name:'Add Additional Info'},
        {name:'Finish'}
    ]
    const bottomText = [
        'Make sure the token has “Exclude transfer fee” function if it has transfer fees'
    ]
    return (
        <div className='mt-3'>
            <MultiStepForm bottomText={bottomText} step={stepData}>
                <VerifyToken/>
                <div className="content py-4"><h2>DeFI FairLaunch Info</h2></div>
                <div className="content py-4"><h2>Add Additional Info</h2></div>
                <div className="content py-4"><h2>Finish</h2></div>
            </MultiStepForm>
        </div>
    );
}

export default FairLaunchBody;
