import React from "react";

const FinishInfo = ({ title,value, noBorder }) => {
  return (
    <>
        <div className="d-sm-flex d-block align-items-center gap-2 mb-2">
      <p className="w-35 font-13">{title}</p>
      <p className="font-13">{value}</p>
    </div>
    {
      noBorder ? '' : <hr />
    }
    </>
  );
};

export default FinishInfo;
