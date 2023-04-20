import React from 'react';
import CreatePageHeader from '../CreatePageHeader/CreatePageHeader';
import PrivateSaleCreateBody from '../../components/PrivateSaleCreate/PrivateSaleCreateBody';

const PrivateSaleCreate = () => {
    return (
        <>
            <CreatePageHeader title={'Create a Private Sale'} route={'Create a Private Sale'}/>
            <PrivateSaleCreateBody/>
        </>
    );
}

export default PrivateSaleCreate;
