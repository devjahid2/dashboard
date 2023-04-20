import React from "react";
import { icons } from "../../../assets/icons/icon";
import ProgressBar from "../../progress/ProgressBar";

const Finished = ({ item }) => {
  return (
    <>
      <img src={icons.finished} alt="" />
      <p className="font-14">This pool has canceled</p>
      <div className="mt-3">
        <ProgressBar progress={item.progress} />
        <div className="d-flex align-items-center justify-content-between mt-1">
          <p className="network_value">
            {item.value_min}
            {item.crypto_network}
          </p>
          <p className="network_value">
            {item.value_max}
            {item.crypto_network}
          </p>
        </div>
      </div>
    </>
  );
};

export default Finished;
