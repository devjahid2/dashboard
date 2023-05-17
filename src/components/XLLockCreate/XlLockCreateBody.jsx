import React, { useState } from 'react';
import PrivateLockForm from './CreateForm/PrivateLockForm';

const XlLockCreateBody = () => {
    const [data, setData] = useState({
        formData : {}
    })
    return (
        <div className='my-3'>
            <PrivateLockForm data={data} setData={setData} updatingObject={'formData'}/>
        </div>
    );
}

export default XlLockCreateBody;
