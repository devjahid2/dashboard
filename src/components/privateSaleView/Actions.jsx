import React from 'react';
import CountDownTimer from '../CountDownTimer/CountDownTimer';
import ProgressBar from '../progress/ProgressBar';
import InputOnly from '../form/InputOnly';
import ButtonShadow from '../form/ButtonShadow';
import LaunchpadValue from '../launchpadView/LaunchpadValue';
import useWindowWidth from '../../hooks/useWindowWidth';
import Radio2Options from '../CreateForm/Radio2Options';

const Actions = () => {
    const onSmallScreenMobile = useWindowWidth(768);
    return (
        <div className={`d-flex  gap-3 ${
            onSmallScreenMobile
              ? "flex-row mx-width-rs mb-3 flex-wrap align-items-start"
              : "flex-column align-items-center"
          }`}>
            <div className="p-4 bg-white w-100 mx-width radius-0 border-0">
                <CountDownTimer time={"5/26/2023"} />
                <ProgressBar progress={0} />
                <div className="d-flex align-items-center justify-content-between mt-1 mb-2">
                    <p className="network_value">
                    {0}
                    {'ETH'}
                    </p>
                    <p className="network_value">
                    {200}
                    {'ETH'}
                    </p>
                </div>
                <p className="network_value">Amount(max 0.1 ETH)</p>
                <div className="mb-3">
                <InputOnly placeholder={0}/>
                </div>
                <ButtonShadow value={"Buy with ETH"} />
            </div>
            <div className="p-4 bg-white w-100 mx-width">
        <LaunchpadValue half_width={true} name={"Status"} value={'Upcoming'} />
        <LaunchpadValue
          half_width={true}
          name={"Minimum Buy"}
          value={".22 ETH"}
        />
        <LaunchpadValue
          half_width={true}
          name={"Maximum Buy"}
          value={"122 ETH"}
        />
        <LaunchpadValue
          half_width={true}
          name={"You Purchased"}
          value={"0 ETH"}
        />
      </div>
      <div className="p-4 bg-white w-100 mx-width">
        <div className="font-16 mb-3">Owner zone</div>
        <p className='font-12'> To make sure there will be no issues during the presale time, please do not send tokens to wallets before you finalize the presale pool.</p>
        <div className="d-flex align-items-center justify-content-between my-3">
            <p className='font-12 text-active'>Pool Fee</p>
            <p className='font-12'>2% ETH raised + 2% token raised</p>
        </div>
        <hr />
      </div>

      <div className="p-4 bg-white w-100 mx-width">
        <p className="font-14 mb-2">Sale Type</p>
        <Radio2Options optionsOne={'Public'} optionsTwo={'Whitelist'} optionsThree={'Public Anti-bot'}/>
        <button  className='btn-border w-100 p-3 fw-500'>List of contributors</button>
        <div className="d-flex align-items-center gap-2 mt-3">
        <button  className='btn-border w-100 p-3 fw-500'>Cancel pool</button>
        <button  className=' w-100 p-3 fw-500'>Cancel pool</button>
        </div>
        <p className="font-12 mt-3">To Finalize presale, you have to exclude token transfer fee for presale contract.</p>
       
      </div>
        </div>
    );
}

export default Actions;
