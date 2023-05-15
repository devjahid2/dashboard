import React from 'react';
import Radio2Options from '../../CreateForm/Radio2Options';
import TitleInput from '../../CreateForm/TitleInput';
import CreateCalender from '../../CreateForm/CreateCalender';

const PrivateSale = ({data,setData,updatingObject}) => {
    return (
        <div className='my-4 content radius-0 border-0'>
            <Radio2Options 
        title={"Whitelist"}
        subTitle={"You can enable/disable whitelist anytime"}
        optionsOne={"Disable"}
        optionsTwo={"Enable"}
      />
      <TitleInput name={'softcap'} updatingObject={updatingObject} data={data} setData={setData}
        title={"SoftCap (ETH)*"}
        subtitle={"SoftCap must be > = 50% of HardCap!"}
        placeholder={""}
        defaultValue="0"
      />
      <TitleInput name={'hardcore'} updatingObject={updatingObject} data={data} setData={setData} title={"HardCap (ETH)*"} placeholder={""} defaultValue="0" />
      <TitleInput name={'minBuy'} updatingObject={updatingObject} data={data} setData={setData}
        title={"Minimum Buy (ETH)*"}
        placeholder={""}
        defaultValue="0"
      />
      <TitleInput name={'maxBuy'} updatingObject={updatingObject} data={data} setData={setData}
        title={"Maximum Buy (ETH)*"}
        placeholder={""}
        defaultValue="0"
      />
      <CreateCalender
        placeholder2={"Select End..."}
        title={"Start  & End Time (ETH)*"}
        text={""}
        placeholder={"Select Start..."}
      />
      <TitleInput name={'fundRelease'} updatingObject={updatingObject} data={data} setData={setData} title={'First Fund Release For Project (%)*'} placeholder={'Ex: 40%'}/>
      <TitleInput name={'fundPeriod'} updatingObject={updatingObject} data={data} setData={setData} title={'Fund Vesting Period Each Cycle (days)*'} placeholder={'Ex: 3'} subtitle={'Vesting period each cycle cannot be blank'}/>
      <TitleInput name={'fundPeriod2'} updatingObject={updatingObject} data={data} setData={setData} title={'Fund Vesting Period Each Cycle (%)*'} placeholder={'Ex: 20'}/>
        </div>
    );
}

export default PrivateSale;
