import React, { useState } from 'react';
import FinishInfo from './FinishInfo';
import SwitchButton from '../../form/SwitchButton';

const Finish = () => {
    const [filterOption,setFilterOption] = useState(false)
    return (
        <div className='my-4 content radius-0 border-0'>

            <div className="d-md-flex align-items-start bg-white p-3 mb-3">
                <div className="w-40">
                    <h4 className='text-uppercase font-16 mb-3'>Token info</h4>
                </div>
                <div className='w-100'>
                <FinishInfo title={'Total Token'} value={'321,600 Token Name'}/>
                <FinishInfo title={'Factory Address'} value={'0xDfaAe46eE412395dB23e844B21f7C8A1f55B7012'}/>
                <FinishInfo title={'Token Name'} value={'Token Name'}/>
                <FinishInfo title={'Token Symbol'} value={'TKN'}/>
                <FinishInfo noBorder={true} title={'Token Decimals'} value={'18'}/>
                </div>
            </div>

            <div className="d-md-flex align-items-start bg-white p-3 mb-3">
                <div className="w-40">
                    <h4 className='text-uppercase font-16 mb-3'>Presale info</h4>
                </div>
                <div className='w-100'>
                <FinishInfo title={'Presale Rate'} value={'200 Token Name '}/>
                <FinishInfo title={'Listing Rate'} value={'150 Token Name '}/>
                <FinishInfo title={'Sale Method'} value={'Public'}/>
                <FinishInfo title={'SoftCap (ETH)'} value={'500'}/>
                <FinishInfo title={'HardCap (ETH)'} value={'1000'}/>
                <FinishInfo title={'Unsold Tokens'} value={'Burn'}/>
                <FinishInfo title={'Minimum buy'} value={'0.01 ETH'}/>
                <FinishInfo title={'Maximum buy'} value={'0.1 ETH'}/>
                <FinishInfo title={'Liquidity Percent (%)'} value={'80'}/>
                <FinishInfo title={'Start time'} value={'2023-03-13T13:00 (UTC)'}/>
                <FinishInfo title={'End time'} value={'2023-03-28T13:00 (UTC)'}/>
                <FinishInfo noBorder={true} title={'Liquidity Lock Time (minutes)'} value={'365'}/>
                </div>
            </div>

            <div className="d-md-flex align-items-start bg-white p-3 mb-3">
                <div className="w-40">
                    <h4 className='text-uppercase font-16 mb-3'>About</h4>
                    <p className='font-11 p-1 ps-0'>It will be P2E (play-to-earn) which refers to the concept of gaming in which the platform provides its players with a chance to earn any form of in-game assets that can be transferred to the real world as a valuable resource.</p>
                </div>
                <div className='w-100'>
                <FinishInfo title={'Website'} value={'https://site.com'}/>
                <FinishInfo title={'Facebook'} value={'https://site.com'}/>
                <FinishInfo title={'Twitter'} value={'https://site.com'}/>
                <FinishInfo title={'Telegram'} value={'https://site.com'}/>
                <FinishInfo title={'Github'} value={'https://site.com'}/>
                <FinishInfo title={'Instagram'} value={'https://site.com'}/>
                <FinishInfo title={'Discord'} value={'https://site.com'}/>
                <FinishInfo noBorder={true} title={'Reddit'} value={'https://site.com'}/>
                </div>
            </div>

            <div className="d-flex gap-5">
            <p className="font-12">Vesting Contributor</p>
            <div
            onClick={() => setFilterOption(!filterOption)}
            className={`advanced_filter pointer-event d-flex align-items-center gap-2  ${
              filterOption ? "active" : ""
            }`}
          >
            <SwitchButton />
            <p className="font-12">Enable</p>
          </div>
            </div>

        </div>
    );
}

export default Finish;
