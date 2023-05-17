import React from 'react';
import TitleInput from '../CreateForm/TitleInput';

const AirdropCreateBody = () => {
    return (
        <div className='my-3 border-0 radius-0'>
            <TitleInput title={'Token address*'} subtitle={'Create airdrop fee: 0.1 ETH'} placeholder={'Token Address '} defaultValue={'0x5717A873382413D300eD59c1F2f973FD753DE59b'}/>
            <hr />
            <div className="d-flex flex-column flex-md-row gap-2 align-items-center justify-content-end">
            <div className="d-flex align-items-center gap-2 flex-column flex-sm-row w-sm-100 mt-2 mt-md-0 w-md-max-100 ">
                <button className='p-3 px-5 w-100 btn-border'>Back</button>
                <button className='p-3 px-5 w-100'>Lock</button>
            </div>
            </div>
        </div>
    );
}

export default AirdropCreateBody;
