import React from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import TopBarResponsive from '../../components/header/TopBarResponsive';
import Navigation from '../../components/header/Navigation';
import Ethereum from '../../components/ethereum/Ethereum';
import Wallet from '../../components/wallet/Wallet';
import CreateButton from '../../components/header/CreateButton';

const CreatePageHeader = ({title,route,middle,homeText}) => {
    const onSmallScreenMobile = useWindowWidth(1199);
    return (
        <div className="header position-relative">
        {onSmallScreenMobile ? (
          <TopBarResponsive />
        ) : (
          <div className="d-flex align-items-center justify-content-between pt-3">
            <Navigation
              homeText={homeText}
              middle={middle}
              route={route}
            />
            <div className="d-flex align-items-center">
              <Ethereum />
              <Wallet />
              <CreateButton />
            </div>
          </div>
        )}
        <div className="content py-3">
          <h2 className="title">{title}</h2>
        </div>
      </div>
    );
}

export default CreatePageHeader;
