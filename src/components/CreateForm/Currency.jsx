import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/icon";

const Currency = ({eth, busd, usdt, usdc,updatingObject,data,setData}) => {
  // const [currency,setCurrency] = useState(eth ? 'eth' : '');
  // useEffect(() => {
  //   setData({...data,[updatingObject]:{...data[updatingObject],currency: currency}});
  // },[])
  const handler = (e) => {
    const value = e.target.value;
    // setCurrency(value)
    setData({...data,[updatingObject]:{...data[updatingObject],currency: value}});
  }

  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-4">
        <div className="label-text w-35">
          <h6 className="font-12">
            Currency{" "}
            <Link className="ms-1">
              <img src={icons.refresh} alt="" />
            </Link>
          </h6>
          <p className="font-11">Users will pay with ETH for your token</p>
        </div>
        <div className="d-flex align-items-md-center  gap-3 w-100 flex-column flex-md-row align-items-start">
          {eth ? (
            <div className="single_input">
              <input value={'eth'} onChange={(e) => handler(e)}  type="radio" name="currency" id="eth" />
              <label htmlFor="eth">ETH</label>
            </div>
          ) : (
            ""
          )}
          {busd ? (
            <div className="single_input">
              <input value={'busd'} onChange={(e) => handler(e)} type="radio" name="currency" id="BUSD" />
              <label htmlFor="BUSD">BUSD</label>
            </div>
          ) : (
            ""
          )}
          {usdt ? (
            <div className="single_input">
              <input value={'usdt'} onChange={(e) => handler(e)} type="radio" name="currency" id="USDT" />
              <label htmlFor="USDT">USDT</label>
            </div>
          ) : (
            ""
          )}
          {usdc ? (
            <div className="single_input">
              <input value={'usdc'} onChange={(e) => handler(e)} type="radio" name="currency" id="USDC" />
              <label htmlFor="USDC">USDC</label>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Currency;
