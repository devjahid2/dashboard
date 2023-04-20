import React from 'react';
import './createLaunchpad.css'
import LaunchpadCreateBody from '../../components/launchpadCreate/LaunchpadCreateBody';
import CreatePageHeader from '../CreatePageHeader/CreatePageHeader';

const CreateLaunchpad = () => {
    return (
        <>
            <CreatePageHeader title={'Create Launchpad'} route={'Create Launchpad'}/>
            <LaunchpadCreateBody/>
        </>
    );
}

export default CreateLaunchpad;
