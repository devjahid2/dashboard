import React from 'react';
import MultiStepForm from '../multiStepForm/MultiStepForm';
import VerifyTokenForm from './LaunchpadCreateForm/VerifyTokenForm';
import DefiFairLaunch from './LaunchpadCreateForm/DefiFairLaunch';
import AdditionalInfo from './LaunchpadCreateForm/AdditionalInfo';
import Finish from './LaunchpadCreateForm/Finish';

const LaunchpadCreateBody = () => {
    const stepData = [
        {name:'Verify token'},
        {name:'DeFI FairLaunch Info'},
        {name:'Add Additional Info'},
        {name:'Finish'}
    ]
    const bottomText = [
        'For auto listing, after you finalize the pool your token will be auto listed on DEX',
        'Need 0 Token Name to create launchpad'
    ]
    return (
        <div className='my-3'>
            <MultiStepForm bottomText={bottomText} step={stepData}>
                <VerifyTokenForm/>
                <DefiFairLaunch/>
                <AdditionalInfo/>
                <Finish/>
            </MultiStepForm>
        </div>
    );
}

export default LaunchpadCreateBody;
