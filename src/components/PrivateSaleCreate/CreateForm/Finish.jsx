import React from 'react';
import FinishInfo from './../../launchpadCreate/LaunchpadCreateForm/FinishInfo';
import { icons } from '../../../assets/icons/icon';

const Finish = ({data}) => {
    
    return (
        <div className='my-4 content radius-0 border-0'>
            { data.additionalInfo.description.length < 128 ? <div className='d-flex align-items-center gap-2 warn_wrap mb-3'>
            <img src={icons.warning}/>
                <p className="warn_text">Cannot submit by following the errors. Description must be 128 characters or more</p>
            </div> : ''}
            <div className="d-md-flex align-items-start bg-white p-3 mb-3">
                <div className="w-40">
                    <h4 className='text-uppercase font-16 mb-3'>Private sale info</h4>
                </div>
                <div className='w-100'>
                <FinishInfo title={'Title'} value={'Icon.oi'}/>
                <FinishInfo noBorder={true} title={'Sale Type'} value={'Public'}/>
                </div>
            </div>

            <div className="d-md-flex align-items-start bg-white p-3 mb-3">
                <div className="w-40">
                    <h4 className='text-uppercase font-16 mb-3'>Details</h4>
                </div>
                <div className='w-100'>
                <FinishInfo title={'SoftCap (ETH)'} value={'500'}/>
                <FinishInfo title={'HardCap (ETH)'} value={'1000'}/>
                <FinishInfo title={'Minimum buy'} value={'0.01 ETH'}/>
                <FinishInfo title={'Maximum buy'} value={'0.1 ETH'}/>
                <FinishInfo title={'Fund TGE'} value={'22%'}/>
                <FinishInfo title={'Fund Cycle'} value={'2 Days'}/>
                <FinishInfo title={'Fund Release Each Cycle'} value={'2%'}/>
                <FinishInfo title={'Start time'} value={'2023-03-13T13:00 (UTC)'}/>
                <FinishInfo noBorder={true} title={'End time'} value={'2023-03-28T13:00 (UTC)'}/>
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
        </div>
    );
}

export default Finish;
