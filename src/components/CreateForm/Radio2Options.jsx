import React from "react";

const Radio2Options = ({optionsOne,optionsTwo,title,subTitle,optionsThree}) => {
  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-4">
        {
          title ? <div className="label-text w-35">
          <h6 className="font-12">{title}</h6>
          <p className="font-11">{subTitle ? subTitle : ''}</p>
        </div> : ''
        }
        <div className="d-flex align-items-center gap-4 w-100">
          <div className="single_input">
            <input defaultChecked type="radio" name="option" id="optionsOne" />
            <label className="font-12" htmlFor="optionsOne">{optionsOne}</label>
          </div>
          {
            optionsTwo ? <div className="single_input">
            <input type="radio" name="option" id="optionsTwo" />
            <label className="font-12" htmlFor="optionsTwo">{optionsTwo}</label>
          </div> : ''
          }
          {
            optionsThree ? <div className="single_input">
            <input type="radio" name="option" id="optionsThree" />
            <label className="font-12" htmlFor="optionsThree">{optionsThree}</label>
          </div> : ''
          }
        </div>
      </div>
    </>
  );
};

export default  Radio2Options;
