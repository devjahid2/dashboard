import React from "react";
import TokenAddress from "./../../CreateForm/TokenAddress";
import Currency from "../../CreateForm/Currency";
import FreeOptions from "./../../CreateForm/FreeOptions";
import Radio2Options from "../../CreateForm/Radio2Options";
import CreateSwitch from "../../CreateForm/CreateSwitch";

const VerifyTokenForm = () => {
  
  return (
    <div className="my-4 content radius-0 border-0 verify_token">
      <TokenAddress />
      <Currency eth={true} usdt={true} usdc={true} busd={true} />
      <FreeOptions />
      <Radio2Options optionsOne={'Auto'} optionsTwo={'Manual'} title={'Listing options'} />
      <CreateSwitch title={'Affiliate Program'} label={'Enabled'} />
    </div>
  );
};

export default VerifyTokenForm;
