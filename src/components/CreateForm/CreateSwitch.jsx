import React, { useState } from "react";
import SwitchButton from "../form/SwitchButton";

const CreateSwitch = ({title,label}) => {
  const [filterOption, setFilterOption] = useState(false);
  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-4">
        <div className="label-text w-35">
          <h6 className="font-12">{title}</h6>
        </div>
        <div className="d-flex align-items-center gap-4 w-100">
          <div
            onClick={() => setFilterOption(!filterOption)}
            className={`advanced_filter d-flex align-items-center gap-2 pointer-event ${
              filterOption ? "active" : ""
            }`}
          >
            <SwitchButton />
            <p className="font-12">{label}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSwitch;
