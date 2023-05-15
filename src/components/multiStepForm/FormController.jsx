import React from "react";
import { icons } from "../../assets/icons/icon";

const FormController = ({
  data,
  presentStep,
  bottomText,
  step,
  setPresentStep,
  handler
}) => {
  const handelNext = () => {
    setPresentStep((prevData) => [...prevData, presentStep.length + 1]);
  };
  const handelPrevious = () => {
    const newData = presentStep.slice(0, -1);
    setPresentStep(newData);
  };
  // console.log(presentStep)

  return (
    <div>
      {data[presentStep.length - 1]}
      <div className="content py-3">
        <hr />
      </div>
      <div className="multi_form_actions content">
        <div className={`d-flex flex-column flex-md-row gap-2 align-items-center ${bottomText[presentStep.length - 1] ? 'justify-content-between':'justify-content-end'}`}>
          {bottomText[presentStep.length - 1] ? (
            <p className="w-md-max-100 text-md-start text-center">
              <img className="me-2" src={icons.info_empty} alt="info" />
              {bottomText[presentStep.length - 1]}
            </p>
          ) : (
            ""
          )}
          <div className="d-flex align-items-center gap-2 flex-column flex-sm-row w-sm-100 mt-2 mt-md-0 w-md-max-100 ">
            <button
              onClick={handelPrevious}
              disabled={presentStep.length == 1}
              className={`${presentStep.length == 1 ? "disabled" : ""} w-100`}
            >
              Back
            </button>

            
            {
              step.length == presentStep.length ? <button className="w-100" onClick={handler}>Finish</button> : <button className="w-100" onClick={handelNext}>Next</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormController;
