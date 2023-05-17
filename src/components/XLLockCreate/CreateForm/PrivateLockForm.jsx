import React from 'react';
import TitleInput from '../../CreateForm/TitleInput';
import CreateSwitch from '../../CreateForm/CreateSwitch';
import CreateCalender from '../../CreateForm/CreateCalender';

const PrivateLockForm = ({updatingObject,data,setData}) => {
    
    return (
        <div className='my-4 content radius-0 border-0'>
            <TitleInput updatingObject={'formData'} name={'tokenIpAddress'} setData={setData} data={data} title={'Token or LP Token address*'}  placeholder={'Enter token or LP token address'}/>
            <CreateSwitch title={'Another Owner'} label={'Disable'}/>
            <TitleInput updatingObject={'formData'} name={'title'} setData={setData} data={data} title={'Title*'} placeholder={'Ex: My Lock'}/>
            <TitleInput updatingObject={'formData'} name={'amount'} setData={setData} data={data} title={'Amount*'} placeholder={'Enter amount'}/>
            <CreateSwitch title={'Vesting Contributor'} label={'Disable'}/>
            <CreateCalender placeholder={'Select Date...'} title={'Lock Until (UTC)*'}/>
            <hr />
            <div className="d-flex flex-column flex-md-row gap-2 align-items-center justify-content-end">
            <div className="d-flex align-items-center gap-2 flex-column flex-sm-row w-sm-100 mt-2 mt-md-0 w-md-max-100 ">
                <button className='p-3 px-5 w-100 btn-border'>Back</button>
                <button className='p-3 px-5 w-100'>Lock</button>
            </div>
            </div>
        </div>
    );
}

export default PrivateLockForm;
