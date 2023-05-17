import React from 'react';
import './header.css'
import './header_light.css'
import './header_dark.css'
import TopBar from '../../components/header/TopBar';
import TitleBar from '../../components/header/TitleBar';
import FilterMenu from '../../components/header/FilterMenu';
import useWindowWidth from './../../hooks/useWindowWidth';
import TopBarResponsive from '../../components/header/TopBarResponsive';
import Navigation from '../../components/header/Navigation';


const Header = ({title,route,middle,homeText,showFilter,filterMenuProp}) => {
    const onSmallScreen = useWindowWidth(1200);
    const onSmallScreenMobile = useWindowWidth(767);
    // console.log(onSmallScreen)
    return (
        <div className="header position-relative">
            { onSmallScreen ? 
               <>
               <TopBarResponsive/> 
               <Navigation middle={middle} homeText={homeText} route={route ? route : 'Launchpad'}/>
               </> : <TopBar route={route} homeText={homeText} middle={middle}/>
            }
            <TitleBar title={title}/>
            {
                onSmallScreenMobile ? '' : <FilterMenu filterMenuProp={filterMenuProp} showFilter={showFilter}/>
            }
        </div>
    );
}

export default Header;
