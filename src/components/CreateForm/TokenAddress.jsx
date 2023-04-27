import React from "react";
import InputOnly from "../form/InputOnly";

const TokenAddress = () => {
  return (
    <div className="d-md-flex align-items-center justify-content-between mb-4">
      <div className="label-text w-35">
        <h6 className="font-12">Token address *</h6>
        <p className="font-11">Pool creation fee: 1 ETH</p>
      </div>
      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 w-100">
        <InputOnly
          placeholder={"Token Address"}
          defaultValue={"0xDfaAe46eE412395dB23e844B21f7C8A1f55B7012"}
        />
        <div className="mx-300">
        <button>Create token</button>
        </div>
      </div>
    </div>
  );
};

export default TokenAddress;
