import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import { Link } from 'react-router-dom';
import { icons } from './../../assets/icons/icon';

const CreateButton = ({marginLeft}) => {
    const onSmallScreenMobile = useWindowWidth(767);
    const [showCreateMenu,setShowCreateMenu] = useState(false)

    return (
        <div className="position-relative">
            <div onClick={() => setShowCreateMenu(false)} className={`${showCreateMenu ? 'shadow-overlay' : ''} `}></div>
        <button onClick={() => setShowCreateMenu(true)} type='submit' className={`${onSmallScreenMobile ? 'position_bottom':''}  d-flex align-items-center create_button ${marginLeft ? 'ml-20':''} gap-2 p-22`}>
            <img src={icons.plus} alt="" />
            {onSmallScreenMobile ? '' : <p>Create</p>}
           
            <ul className={`position-absolute create_menu ${onSmallScreenMobile ? 'small_device' : ''} ${showCreateMenu ? 'active' : ''}`}>
                <li><Link to="/launchpad/create"><img src={icons.cr_launchpad} alt="launchpad" />Launchpad</Link></li>
                <li><Link to="/fair-launch/create"><img src={icons.cr_fair_launch} alt="fair launch" />Fair launch</Link></li>
                <li><Link to="/xl-lock/create"><img src={icons.cr_xl_lock} alt="xl lock" />XL-Lock</Link></li>
                <li><Link to="/airdrop/create"><img src={icons.cr_airdrop} alt="airdrop" />Airdrop</Link></li>
                <li><Link to="/private-sale/create"><img src={icons.cr_private_sale} alt="Private Sale" />Private Sale</Link></li>
            </ul>
        </button>
        </div>
    );
}

export default CreateButton;
