import React from "react";

const FreeOptions = () => {
  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-4">
        <div className="label-text w-35">
          <h6 className="font-12">Fee Options</h6>
        </div>
        <div className="d-flex align-items-md-center  gap-3 w-100 flex-column flex-md-row align-items-start">
          <div className="single_input">
            <input
              defaultChecked
              type="radio"
              name="options"
              id="recommended"
            />
            <label htmlFor="recommended">
              5% ETH raised only (Recommended)
            </label>
          </div>
          <div className="single_input">
            <input type="radio" name="options" id="token_sold" />
            <label htmlFor="token_sold">2% ETH raised + 2% token sold</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeOptions;
