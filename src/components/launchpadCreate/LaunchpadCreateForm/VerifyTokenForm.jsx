import React from "react";
import TokenAddress from "./../../CreateForm/TokenAddress";
import Currency from "../../CreateForm/Currency";
import FreeOptions from "./../../CreateForm/FreeOptions";
import Affiliate from "./../../CreateForm/Affiliate";
import Radio2Options from "../../CreateForm/Radio2Options";

const VerifyTokenForm = () => {
  
  return (
    <div className="my-4 content radius-0 border-0 verify_token">
      <TokenAddress />
      <Currency eth={true} usdt={true} usdc={true} busd={true} />
      <FreeOptions />
      <Radio2Options optionsOne={'Auto'} optionsTwo={'Manual'} title={'Listing options'} />
      <Affiliate />
    </div>
  );
};

export default VerifyTokenForm;
