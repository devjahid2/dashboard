import React from 'react';
import TitleInput from '../../CreateForm/TitleInput';
import CreateDescription from '../../CreateForm/CreateDescription';
import CreateSelect from '../../CreateForm/CreateSelect';

const socialMedia = [
    { label: "Facebook", value: "facebook" },
    { label: "Twitter", value: "twitter" },
    { label: "Github", value: "github" },
    { label: "Instagram", value: "instagram" },
    { label: "Discord", value: "discord" },
    { label: "Reddit", value: "reddit" },
    { label: "Youtube Video", value: "youtube" },
  ];
const AdditionalInfo = () => {
    return (
        <div className="my-4 content radius-0 border-0">
            <TitleInput title={'Logo *'} defaultValue={'https://'} text={'URL must end with a supported image extension png, jpg, jpeg or gif. '}/>
            <TitleInput title={'Website*'} defaultValue={'https://'} />
            <CreateDescription title={'Description*'} placeholder={'Tell something about you'}/>
            <CreateSelect placeholder={'Select...'} options={socialMedia} title={'Add Social Media'}/>
        </div>
    );
}

export default AdditionalInfo;
