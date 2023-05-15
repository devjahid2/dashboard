import React, { useState } from 'react';
import MultiStepForm from '../multiStepForm/MultiStepForm';
import BeforeStart from './CreateForm/BeforeStart';
import PrivateSale from './CreateForm/PrivateSale';
import AdditionalInfo from './CreateForm/AdditionalInfo';
import Finish from './CreateForm/Finish';

const PrivateSaleCreateBody = () => {
    const [data,setData] = useState({
        beforeStart : {
            title:'',
            currency:''
        },
        privateSale:{},
        additionalInfo:{},
    });

    const stepData = [
        {name:'Before you start'},
        {name:'Private Sale'},
        {name:'Add Additional Info'},
        {name:'Finish'}
    ]
    const bottomText = [
        '',
        '',
        '',
        'For tokens with burns, rebase or other special transfers please ensure that you have a way to exclude rewards, dividens, max tx amount for whitelisted addresses'
    ]
    

    const handler = () => {
        console.log(data)
    }
    return (
        <div className='my-3'>
            <MultiStepForm handler={handler} step={stepData} bottomText={bottomText}>
                <BeforeStart updatingObject={'beforeStart'} data={data} setData={setData}/>
                <PrivateSale updatingObject={'privateSale'} data={data} setData={setData}/>
                <AdditionalInfo updatingObject={'additionalInfo'} data={data} setData={setData}/>
                <Finish data={data}/>
            </MultiStepForm>
        </div>
    );
}

export default PrivateSaleCreateBody;
