import React from "react";

const MultiStepFormHead = ({ presentStep,  step }) => {
    const nextStep = presentStep.length + 1;
  return (
    <div className="multi_form">
      <div className="d-flex align-items-center justify-content-center w-md-100">
        {step.map((item, index) => {
          return (
            <div key={index}>
              <div className="d-flex align-items-center">
              <div className={`line ${index === 0 ? 'opacity-0':''} ${presentStep.find((i) => {return i == index+1}) ? 'finished' : ''} `}></div>
                <div className={`${presentStep.find((i) => {return i == index+1}) ? 'finished' : ''} number`}>{index + 1}</div>
                <div className={`line ${index+1 == step.length ? 'opacity-0':''} ${presentStep.find((i) => {return i == index+1}) ? 'finished' : ''}`}></div>
              </div>
              <p className="mt-2">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiStepFormHead;
