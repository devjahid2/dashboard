import React from 'react';
import TopBarResponsive from '../header/TopBarResponsive';
import Navigation from '../header/Navigation';
import Ethereum from '../ethereum/Ethereum';
import Wallet from '../wallet/Wallet';
import CreateButton from '../header/CreateButton';
import NetworkLogo from '../crypto/NetworkLogo';
import useWindowWidth from '../../hooks/useWindowWidth';
import { icons } from '../../assets/icons/icon';

const PrivateViewHeader = ({data,privateSale,setPrivateSale}) => {
    const onSmallScreenMobile = useWindowWidth(1199);
    const onSmallScreenMobileTab = useWindowWidth(767);
    const item = {
        image: icons.agora,
        network_image: icons.parent_etn_network,
        status:'upcoming',
        sale_status: "presale",
    }
    return (
        <div className="header position-relative launchepad_head">
        {
          onSmallScreenMobile ? <TopBarResponsive/> :
          <div className="d-flex align-items-center justify-content-between pt-3">
          <Navigation
            homeText={"Home / Private Sales "}
            route="Icon.oi Private Sale"
          />
          <div className="d-flex align-items-center">
            <Ethereum />
            <Wallet />
            <CreateButton />
          </div>
        </div>
        }{
          onSmallScreenMobile ?  <Navigation
            homeText={"Home / Private Sales "}
            route="Icon.oi Private Sale"
          /> : ''
        }
        <div className="d-flex align-items-center gap-3 content py-2">
        
          <NetworkLogo item={item} />
          <div>
            <h2 className="launched_title title">
            Icon.oi Private Sale{" "}
              <span className="text-capitalize">{item.sale_status}</span>
            </h2>
            {
              onSmallScreenMobileTab ? '' : <div className="d-flex align-items-center gap-3">
              <p className={`text-capitalize status_text status_${item.status}`}>
                {item.status}
              </p>
              <div className="d-flex gap-2 align-items-center">
                <img src={icons.global} alt="global" />
                <img src={icons.medium} alt="medium" />
                <img src={icons.telegram} alt="telegram" />
                <img src={icons.twitter} alt="twitter" />
              </div>
            </div>
            }
          </div>
        </div>
        {
          onSmallScreenMobileTab ? 
          <div className="content filter_menu">
          <ul>
              <li onClick={() => setPrivateSale('actions')} className={`${privateSale === 'actions' ? 'active':''}`}>Actions</li>
              <li onClick={() => setPrivateSale('description')} className={`${privateSale === 'description' ? 'active':''}`}>description</li>
          </ul>
          </div>:''
        }
      </div>
    );
}

export default PrivateViewHeader;
