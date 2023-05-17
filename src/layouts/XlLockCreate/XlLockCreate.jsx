import React from 'react';
import CreatePageHeader from '../CreatePageHeader/CreatePageHeader';
import XlLockCreateBody from '../../components/XLLockCreate/XlLockCreateBody';

const XlLockCreate = () => {
    return (
        <>
           <CreatePageHeader middle={'XL-Lock'} title={'Create Lock'} route={'Create Lock'}/> 
           <XlLockCreateBody/>
        </>
    );
}

export default XlLockCreate;
