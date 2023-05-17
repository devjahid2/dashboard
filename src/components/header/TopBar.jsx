import React from 'react';
import Navigation from './Navigation';
import Ethereum from '../ethereum/Ethereum';
import Wallet from '../wallet/Wallet';
import CreateButton from './CreateButton';

const TopBar = ({middle,homeText,route}) => {
    return (
        <div className="d-flex align-items-center content justify-content-between pt-3 ps-0">
            <Navigation route={route ? route : 'Launchpad'} homeText={homeText} middle={middle}/>
            <div className='d-flex align-items-center'>
                <Ethereum/>
                <Wallet/>
                <CreateButton marginLeft={true}/>
            </div>

        </div>
    );
}

export default TopBar;
