import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import { icons } from '../../assets/icons/icon';
import { Link } from 'react-router-dom';

const Pagination = ({data}) => {
    const smallDevice = useWindowWidth(767);
    const dataLength = data.length/10;
    const paginationItem = dataLength <= 1 ? 1 : dataLength;
    const [dataPagination,setDataPagination] = useState([])
    
    console.log(dataPagination)
    return (
        <div className='my-3'>
            <div className={`d-flex align-items-center gap-2 w-100 justify-content-center`}>
                <div className="single-pagination-item">
                    <img src={icons.arrow_left} alt='arrow left / previous'/>
                </div>
                <div className="single-pagination-item active">
                    <Link  to={'/xl-lock/token/1'}>1</Link>
                </div>
                <div className="single-pagination-item ">
                    <Link  to={'/xl-lock/token/2'}>2</Link>
                </div>
                <div className="single-pagination-item ">
                    <Link  to={'/xl-lock/token/3'}>3</Link>
                </div>
                <div className="single-pagination-item ">
                    <Link  to={'/xl-lock/token/4'}>4</Link>
                </div>
                <div className="single-pagination-item ">...</div>
                <div className="single-pagination-item ">
                    <Link  to={'/xl-lock/token/50'}>50</Link>
                </div>
                <div className="single-pagination-item">
                    <img src={icons.arrow_right} alt='arrow left / previous'/>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
