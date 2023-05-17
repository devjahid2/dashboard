import React from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import { icons } from '../../assets/icons/icon';
import Actions from './Actions';
import Descriptions from './Descriptions';

const PrivateViewBody = ({privateSale,setPrivateSale}) => {
    const onSmallScreenMobile = useWindowWidth(767);
    const item = {
        image: icons.agora,
        network_image: icons.parent_etn_network,
        status:'upcoming',
        sale_status: "presale",
    }
    return (
        <div className="content mt-4">
         {
      onSmallScreenMobile ?  <div className="d-flex align-items-center gap-3 mb-4">
            <p className={`text-capitalize status_text status_${item.status}`}>
              {item.status}
            </p>
            <div className="d-flex gap-2 align-items-center">
              <img src={icons.global} alt="global" />
              <img src={icons.medium} alt="medium" />
              <img src={icons.telegram} alt="telegram" />
              <img src={icons.twitter} alt="twitter" />
            </div>
          </div> :''
          }

          <div className={`row position-relative ${onSmallScreenMobile ? '' : 'mb-3'}`}>
          {
            onSmallScreenMobile ? 
            <>
                {
                    privateSale === 'actions' ? <Actions/> : <Descriptions/>
                }
            </> 
            :
             <>
            <div className={`col-md-8 mb-responsive`}>
          <Descriptions/>
          </div>
          <div className="col-md-4 mb-responsive">
          <Actions/>
          </div>
            </>
          }
            </div>

        </div>
    );
}

export default PrivateViewBody;
