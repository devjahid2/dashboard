import React, { useState } from 'react';
import PrivateViewHeader from '../../components/privateSaleView/PrivateViewHeader';
import '../LaunchpadView/cryptoview.css'
import PrivateViewBody from '../../components/privateSaleView/PrivateViewBody';
const PrivateSaleView = () => {
    const [privateSale, setPrivateSale] = useState('actions')
    return (
        <div>
            <PrivateViewHeader privateSale={privateSale} setPrivateSale={setPrivateSale}/>
            <PrivateViewBody privateSale={privateSale} setPrivateSale={setPrivateSale}/>
        </div>
    );
}

export default PrivateSaleView;
