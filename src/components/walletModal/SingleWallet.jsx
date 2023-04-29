import React from 'react';

const SingleWallet = ({data,setIsSelectWallet}) => {
    const {label,icon,id} = data;
    return (
        <div onClick={() => setIsSelectWallet({selected:true,id:id})} className='w-49 text-center p-3 h-100 single-wallet pointer-event'>
            <img className='py-2 wallet-img' src={icon} alt="" />
            <p className='font-13'>{label}</p>
        </div>
    );
}

export default SingleWallet;
