import React from 'react';
import MultiStepForm from '../multiStepForm/MultiStepForm';
import VerifyTokenForm from './LaunchpadCreateForm/VerifyTokenForm';
import DefiFairLaunch from './LaunchpadCreateForm/DefiFairLaunch';
import AdditionalInfo from './LaunchpadCreateForm/AdditionalInfo';
import Finish from './LaunchpadCreateForm/Finish';

const LaunchpadCreateBody = () => {
    const handelSubmit = () => {
        alert('submit data to alert')
    }
    const stepData = [
        {name:'Verify token'},
        {name:'DeFI FairLaunch Info'},
        {name:'Add Additional Info'},
        {name:'Finish'}
    ]
    const bottomText = [
        'For auto listing, after you finalize the pool your token will be auto listed on DEX',
        'Need 0 Token Name to create launchpad',
        '',
        'To enable safe token transfers during presale, whitelist multiple addresses or disable special events by setting fees to 0 for burns, rebases, or other transfers.'
    ]
    return (
        <div className='my-3'>
            <MultiStepForm bottomText={bottomText} step={stepData} handler={handelSubmit}>
                <VerifyTokenForm/>
                <DefiFairLaunch/>
                <AdditionalInfo/>
                <Finish/>
            </MultiStepForm>
        </div>
    );
}

export default LaunchpadCreateBody;
