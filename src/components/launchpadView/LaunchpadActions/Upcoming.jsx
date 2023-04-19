import React from 'react';
import CountDownTimer from '../../CountDownTimer/CountDownTimer';
import ProgressBar from '../../progress/ProgressBar';
import InputOnly from './../../form/InputOnly';
import ButtonShadow from '../../form/ButtonShadow';

const Upcoming = ({item}) => {
    return (
        <>
            <h4 className="font-16 mb-2 text-start text-uppercase">Presale Starts In</h4>
            <CountDownTimer time={item.end_date}/>
            <ProgressBar progress={item.progress}/>
            <div className="d-flex align-items-center justify-content-between mt-1 mb-2">
          <p className="network_value">
            {item.value_min}
            {item.crypto_network}
          </p>
          <p className="network_value">
            {item.value_max}
            {item.crypto_network}
          </p>
        </div>
        <div className="amount radius-0 border-0 mb-3">
        <p className='text-start font-12'>Amount</p>
        <InputOnly defaultValue={0} placeholder={0}/>
        </div>
        <ButtonShadow value={'You are not in whitelist'}/>
        </>
    );
}

export default Upcoming;
