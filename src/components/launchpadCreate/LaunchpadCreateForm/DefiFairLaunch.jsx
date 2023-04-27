import React from 'react';
import TitleInput from './../../CreateForm/TitleInput';
import Radio2Options from '../../CreateForm/Radio2Options';
import CreateSelect from '../../CreateForm/CreateSelect';

const refundType = [
    {label:'options1',value:'1'},
    {label:'options2',value:'2'},
    {label:'options3',value:'3'}
]

const DefiFairLaunch = () => {
    return (
        <div className="my-4 content radius-0 border-0 verify_token">
            <TitleInput title={'Presale rate*'} placeholder={''} defaultValue="0"/>
            <Radio2Options title={'Whitelist'} subTitle={'Users will pay with ETH for your token'} optionsOne={'Disable'} optionsTwo={'Enable'}/>
            <TitleInput title={'SoftCap (ETH)*'} subtitle={'SoftCap must be > = 50% of HardCap!'} placeholder={''} defaultValue="0"/>
            <TitleInput title={'HardCap (ETH)*'}  placeholder={''} defaultValue="0"/>
            <TitleInput title={'Minimum Buy (ETH)*'}  placeholder={''} defaultValue="0"/>
            <TitleInput title={'Maximum Buy (ETH)*'}  placeholder={''} defaultValue="0"/>
            <CreateSelect title={'Refund Type'} placeholder={'Select...'} options={refundType}/>
            <CreateSelect title={'Router'} placeholder={'Select...'} options={refundType}/>
            <TitleInput title={'Liquidity (%)*'} subtitle={'Allocate 51-100% of raised funds to Liquidity.'}  text={'Spend 1 ETH for fewer tokens than presale rate, enabling higher listing price.'} placeholder={''} defaultValue="0"/>


        </div>
    );
}

export default DefiFairLaunch;
