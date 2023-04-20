import React from "react";

const ListingOptions = () => {
  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-4">
        <div className="label-text w-35">
          <h6 className="font-12">Listing options</h6>
        </div>
        <div className="d-flex align-items-center gap-4 w-100">
          <div className="single_input">
            <input defaultChecked type="radio" name="listing" id="auto" />
            <label htmlFor="auto">Auto</label>
          </div>
          <div className="single_input">
            <input type="radio" name="listing" id="manual" />
            <label htmlFor="manual">Manual</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingOptions;
