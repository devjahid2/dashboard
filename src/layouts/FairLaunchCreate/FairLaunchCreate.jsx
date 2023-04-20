import React from 'react';
import FairLaunchBody from '../../components/FairLaunchCreate/FairLaunchBody';
import CreatePageHeader from '../CreatePageHeader/CreatePageHeader';

const FairLaunchCreate = () => {
    return (
        <>
         <CreatePageHeader title={'Create Fair Launch'} route={'Create Fair Launch'}/>
         <FairLaunchBody/>   
        </>
    );
}

export default FairLaunchCreate;
