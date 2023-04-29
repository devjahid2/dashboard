import React, { useState } from 'react';
import './modal.css'
import { icons } from '../../assets/icons/icon';
import SingleWallet from './SingleWallet';
import walletData from '../../data/connectWalletData';
const WalletModal = ({isOpen,setIsOpen}) => {
    const [isAgree,setIsAgree] = useState(false);
    const [isSelectWallet,setIsSelectWallet] = useState({
        selected:false,
        id:null
    })
    return (
        <>
            <div onClick={() => setIsOpen(false)} className="shadow-overlay"></div>
            <div className={`w_modal ${isOpen ? 'active':''}`}>
            <div className="d-flex align-items-center justify-content-between p-3">
                <h5>{isAgree ? 'Connect to a wallet' : ''}</h5>
                <img className='pointer-event' onClick={() => setIsOpen(false)} src={icons.cross_icon} alt="cross" />
            </div>
            <div className="p-3">
                { 
                    isSelectWallet.selected ?
                    <div>
                        {/* <h2>connecting{isSelectWallet.id}</h2> */}
                        <div className="text-center">
                            <img className='spinner' src={icons.wallet_loading} alt="spin" />
                            <h4 className='font-18 py-3'>Connect to a wallet</h4>
                            <p className='font-13 pb-3'>Waiting for connect...</p>
                        </div>
                    </div> :
                    isAgree ? 
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        {
                            walletData.map((data) => {
                                return <SingleWallet setIsSelectWallet={setIsSelectWallet} data={data} key={data.id}/>
                            })
                        }
                    </div>
                 : 
                    <>
                        <div className="text-center">
                            <img src={icons.continue_wallet} alt="" />
                            <h4 className='font-18 py-3'>Connect Wallet to continue</h4>
                            <p className='font-13 pb-3'>You need to connect your wallet to complete this action</p>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <button onClick={() => setIsOpen(false)} className='btn-border xcel-btn'>Cancel</button>
                            <button onClick={() => setIsAgree(true)} className='btn-bg xcel-btn'>Connect Wallet </button>
                        </div>
                    </>
                }

            </div>
        </div>
        </>
    );
}

export default WalletModal;
