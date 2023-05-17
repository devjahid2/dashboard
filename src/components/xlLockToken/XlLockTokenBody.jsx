import React from 'react';
import InputOnly from '../form/InputOnly';
import XlDataTable from './XlDataTable';
import Pagination from '../Pagination/Pagination';
import xldata from '../../data/xlDataTable';

const XlLockTokenBody = () => {
    const data = xldata;
    return (
        <div className='border-0 radius-0 my-4'>
            <InputOnly placeholder={'Enter token name or token symbol'}/>
            <XlDataTable data={data}/>
            <Pagination data={data}/>
        </div>
    );
}

export default XlLockTokenBody;
