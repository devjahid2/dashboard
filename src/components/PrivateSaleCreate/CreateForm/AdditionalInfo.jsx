import React from 'react';
import TitleInput from '../../CreateForm/TitleInput';
import CreateDescription from '../../CreateForm/CreateDescription';
import CreateSelect from '../../CreateForm/CreateSelect';

const AdditionalInfo = ({data,setData,updatingObject}) => {
    const socialMedia = [
        { label: "Facebook", value: "facebook" },
        { label: "Twitter", value: "twitter" },
        { label: "Github", value: "github" },
        { label: "Instagram", value: "instagram" },
        { label: "Discord", value: "discord" },
        { label: "Reddit", value: "reddit" },
        { label: "Youtube Video", value: "youtube" },
      ];
    return (
        <div className='my-4 content radius-0 border-0'>
            <TitleInput data={data} setData={setData} updatingObject={updatingObject} name={'logo'} title={'Logo*'} placeholder={'Ex: https://'} subtitle={'URL must end with a supported image extension png, jpg, jpeg or gif. '}/>
            <TitleInput data={data} setData={setData} updatingObject={updatingObject} name={'website'} title={'Website*'} placeholder={'Ex: https://'}/>
            <CreateDescription data={data} setData={setData} updatingObject={updatingObject} title={'Description*'} placeholder={'Tell something about you'}/>
            <CreateSelect data={data} setData={setData} updatingObject={updatingObject} name={'social'} title={'Add Social Media'} options={socialMedia}/>
        </div>
    );
}

export default AdditionalInfo;
