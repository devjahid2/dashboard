import React from 'react';
import MultiStepForm from '../multiStepForm/MultiStepForm';
import VerifyTokenForm from './LaunchpadCreateForm/VerifyTokenForm';
import DefiFairLaunch from './LaunchpadCreateForm/DefiFairLaunch';

const LaunchpadCreateBody = () => {
    const stepData = [
        {name:'Verify token'},
        {name:'DeFI FairLaunch Info'},
        {name:'Add Additional Info'},
        {name:'Finish'}
    ]
    return (
        <div className='mt-3'>
            <MultiStepForm bottomText={'For auto listing, after you finalize the pool your token will be auto listed on DEX'} step={stepData}>
                <VerifyTokenForm/>
                <DefiFairLaunch/>
                <div className="content py-4"><h2>Add Additional Info</h2></div>
                <div className="content py-4"><h2>Finish</h2></div>
            </MultiStepForm>
        </div>
    );
}

export default LaunchpadCreateBody;
