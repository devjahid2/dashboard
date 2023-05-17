import React from 'react';
import CreatePageHeader from '../CreatePageHeader/CreatePageHeader';
import AirdropCreateBody from '../../components/AridropCreate/AirdropCreateBody';

const CreateAirdrop = () => {
    return (
        <>
           <CreatePageHeader title={'Create Airdrop'} middle={'Airdrop'} route={'Create Airdrop'}/> 
           <AirdropCreateBody/>
        </>
    );
}

export default CreateAirdrop;
