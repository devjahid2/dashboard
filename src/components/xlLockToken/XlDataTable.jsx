import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../../assets/icons/icon';

const XlDataTable = ({data}) => {
    
    return (
        <div className='table-responsive'>
            <table className='table mt-3 mb-5 xl-lock-token w-100'>

                <thead>
                    <tr>
                        <th>Name <img src={icons.search} alt="search" /></th>
                        <th>Symbol <img src={icons.filter_gray} alt="filter" /></th>
                        <th>Amount <img src={icons.sort_arrow} alt="" /></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((item) => {
                            return(
                                <tr key={item.id}>
                                    <td className='py-3'><div className="position-relative">
                                    <img className='position-absolute xl-icon-bg' src={item.symbol_img} alt="network" />
                                    <img className='position-absolute xl-icon' src={item.image} alt="network" />

                                    </div><span style={{left:'40px',position:'relative'}}>{item.title}</span></td>
                                    <td className='py-3'>{item.symbol}</td>
                                    <td className='py-3'>{item.amount}</td>
                                    <td className='text-end py-2'><Link className='text-active d-block pt-2' to={`/xl-lock/view-network/${item.id}`}>{'View'}</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    );
}

export default XlDataTable;
