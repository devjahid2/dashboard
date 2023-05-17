import React from 'react';
import FinishInfo from '../launchpadCreate/LaunchpadCreateForm/FinishInfo';

const Descriptions = () => {
    return (
        <div>
            <p className="font-13">MIMO is not a Utility Token. The MIMO token resides on the Ethereum blockchain where it operates as a decentralized token to provide the world with nothing but M.</p>
            <div className="my-4">
                <FinishInfo title={'Private Sale Address'} value={'0x394F4A0993B29cCDBFDB400FBf559d7D0b330655'}/>
                <FinishInfo title={'SoftCap'} value={'100 ETH'}/>
                <FinishInfo title={'HardCap'} value={'200 ETH'}/>
                <FinishInfo title={'Private Sale Start Time'} value={'2023.02.27 15:00 (UTC)'}/>
                <FinishInfo title={'Private Sale End Time'} value={'2023.02.27 15:00 (UTC)'}/>
                <FinishInfo title={'First Release For Project'} value={'95%'}/>
                <FinishInfo title={'Vesting For Project'} value={'5% each 1 days'}/>
            </div>
        </div>
    );
}

export default Descriptions;
