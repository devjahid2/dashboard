import React, { useContext, useState } from 'react';
import { icons } from '../../assets/icons/icon';
import { ThemeContext } from '../../App';
import { Link } from 'react-router-dom';

const Ethereum = () => {
    const [context,setContext] = useContext(ThemeContext);
    const [network,setNetwork] = useState('zkSync');
    const [networkMenu,setNetworkMenu] = useState(false)
    return (
        <div className='position-relative'>
            <div onClick={() => setNetworkMenu(true)} className="d-flex align-items-center gap-3 wallet p-16 mr-1 pointer-event">
                {
                    network === 'ethereum' ? <img className='ethereum' src={context.theme === 'light' ? icons.ethereum : icons.ethereum_light} alt="ethereum" /> : ''
                }
                {
                    network === 'zkSync' ? <img style={{width:'32px', height:'25px'}} ethereum="ethereum" src={icons.parent_etn_network}/> : ''
                }
                {
                    network === 'arbitrum' ? <img style={{width:'32px', height:'25px'}} ethereum="ethereum" src={icons.arbitrum}/> : ''
                }
                <img className='dwn_arrow' src={icons.down_arrow} alt="" />
            </div>
        {
            networkMenu ? <div onClick={() => setNetworkMenu(false)} className='shadow-overlay'></div> : ''
        }
            <div style={{maxWidth:'160px',minWidth:'160px'}} className={`position-absolute network_absolute ${networkMenu ? 'active':''}`}>
                <ul>
                    <li onClick={() => setNetwork('zkSync')} className={`${network === 'zkSync' ? 'active':''}`}><Link><img className='me-2' src={icons.parent_etn_network} alt="" /> zkSync</Link></li>
                    <li onClick={() => setNetwork('ethereum')} className={`${network === 'ethereum' ? 'active':''}`}><Link><img className='me-2' src={icons.ethereum} alt="" /> Ethereum</Link></li>
                    <li onClick={() => setNetwork('arbitrum')} className={`${network === 'arbitrum' ? 'active':''}`}><Link><img className='me-2' src={icons.arbitrum} alt="" /> Arbitrum</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Ethereum;
