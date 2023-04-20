import React from 'react';
import TitleInput from '../../CreateForm/TitleInput';
import Currency from '../../CreateForm/Currency';

const BeforeStart = () => {
    return (
        <div className='my-4 content radius-0 border-0 verify_token'>
            <TitleInput title={'Title'} subtitle={'Pool creation fee: 0.2 ETH'} placeholder={'EX: This is my private sale'}/>
            <Currency eth={true} usdt={true} usdc={true}/>
        </div>
    );
}

export default BeforeStart;
