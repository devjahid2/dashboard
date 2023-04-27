import React, { useState } from 'react';
import { icons } from './../../assets/icons/icon';
import useWindowWidth from '../../hooks/useWindowWidth';
import WalletModal from '../walletModal/WalletModal';

const Wallet = ({border}) => {
    const onSmallScreen = useWindowWidth(767);
    const [open,setOpen] = useState(false)
    const handelWallet = () => {
        setOpen(true)
    }
    return (
        <>
            <div onClick={handelWallet} className={`d-flex align-items-center gap-3 bg-white pointer-event p-16 p-xy-16 ${border ? 'border-left' : ''}`}>
            <img src={icons.wallet} alt="wallet" />
            {
                onSmallScreen ? '' : <div>
                <p className='balance'>1,35345 <span>ETH</span></p>
                <p className='wallet_address'><span>0x887</span><span>...</span><span>5e40</span></p>
            </div>
            }
            <img src={icons.down_arrow} alt="down arrow" />
        </div>
        {open ? <WalletModal isOpen={open} setIsOpen={setOpen}/> : ''}
        </>
    );
}

export default Wallet;
