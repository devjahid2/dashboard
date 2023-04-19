import React from 'react';
import { icons } from '../../assets/icons/icon';
import ProgressBar from '../progress/ProgressBar';
import LaunchpadValue from './LaunchpadValue';
import SubscribeInput from '../form/SubscribeInput';
import useWindowWidth from '../../hooks/useWindowWidth';
import Upcoming from './LaunchpadActions/Upcoming';
import Canceled from './LaunchpadActions/Canceled';
import Finished from './LaunchpadActions/Finished';

const LaunchpadAction = ({item, launchpadDetail}) => {
    const onSmallScreenMobile = useWindowWidth(768);

    return (
        <div className={`d-flex  gap-3 ${onSmallScreenMobile ? 'flex-row mx-width-rs mb-3 flex-wrap align-items-start':'flex-column align-items-center'}`}>
            <div className="p-4 bg-white w-100 h-100 mx-width">
            <div className="action_head text-center">
                {
                    item.status === 'upcoming' ? <Upcoming item={item}/>:''
                }
                {
                    item.status === 'canceled' ? <Canceled item={item}/>:''
                }
                {
                    item.status === 'filled' || 'finished' ? <Finished item={item}/>:''
                }
            </div>
        </div>
        <div className="p-4 bg-white w-100 h-100 mx-width">
            <LaunchpadValue half_width={true} name={'Status'} value={item.status}/>
            <LaunchpadValue half_width={true} name={'Unsold token'} value={'0 CBEX'}/>
            <LaunchpadValue half_width={true} name={'Current Rate'} value={'1 ETH = 7,458.635 CBEX'}/>
            <LaunchpadValue half_width={true} name={'Total Contributors'} value={'930'}/>
        </div>

        <div className={`p-4 bg-white mx-width w-100 ${onSmallScreenMobile ? '' : 'mb-3'} h-100`}>
            <h4 className='font-16'>Newsletters</h4>
            <p className='font-12 my-3'>Sign up our mailing list to receive our new presales, features, tips and reviews for next 100x projects.</p>
            <SubscribeInput placeholder="Enter your email"/>
        </div>

        </div>
    );
}

export default LaunchpadAction;
