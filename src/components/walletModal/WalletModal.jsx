import React from 'react';
import './modal.css'
import { icons } from '../../assets/icons/icon';
const WalletModal = ({isOpen,setIsOpen}) => {
    return (
        <>
            <div onClick={() => setIsOpen(false)} className="shadow-overlay"></div>
            <div className={`w_modal ${isOpen ? 'active':''}`}>
            <div className="d-flex align-items-center justify-content-between p-3">
                <h5>Connect to a wallet</h5>
                <img className='pointer-event' onClick={() => setIsOpen(false)} src={icons.cross_icon} alt="cross" />
            </div>
        </div>
        </>
    );
}

export default WalletModal;
