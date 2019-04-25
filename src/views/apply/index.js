import React from "react";
import './index.scss'
const Apply = () => {
  return (
    <div className="body-apply">
      <div className="apply-title">
        <p className="title-total">总金额(元)</p>
        <p className="title-money">1,000.00</p>
        <div className="title-content">
          <p className="title-apply">
            <p className="apply-font">贷款金额(元)</p>
            <p className="apply-num">9,000.00</p>
          </p>
          <p className="title-apply" style={{border: "none",paddingLeft: "0.4rem"}}>
            <p className="apply-font">贷款期数</p>
            <p className="apply-num">3期</p>
          </p>
        </div>
      </div>
      <div className="apply-payfor">百度钱包</div>
    </div>
  )
}

export default Apply;
