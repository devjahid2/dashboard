import React from "react";
import TokenAddress from "./../../CreateForm/TokenAddress";
import Currency from "../../CreateForm/Currency";
import FreeOptions from "./../../CreateForm/FreeOptions";
import ListingOptions from "./../../CreateForm/ListingOptions";
import Affiliate from "./../../CreateForm/Affiliate";

const VerifyTokenForm = () => {
  
  return (
    <div className="my-4 content radius-0 border-0 verify_token">
      <TokenAddress />
      <Currency eth={true} usdt={true} usdc={true} busd={true} />
      <FreeOptions />
      <ListingOptions />
      <Affiliate />
    </div>
  );
};

export default VerifyTokenForm;
