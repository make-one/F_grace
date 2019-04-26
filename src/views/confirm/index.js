import React from "react";
import './index.scss'

const infotList = [
  { key:'1',label:'订单号',value:'21312312'},
  { key:'2',label:'学生姓名',value:'贺怡晴'},
  { key:'3',label:'学生编号',value:'0908032'},
  { key:'4',label:'课程',value:'中小学生少看电视'}
]
const moneyList = [
  { key:'test1',label:'总金额(元)'},
  { key:'test2',label:'1,000.00'},
  { key:'teat3',label:'请在2018-05-31 10:42:05前完成支付'},
  { key:'test4',label:'逾期订单将被取消'}
] 

function caleClasss(index) {
  switch(index) {
    case 1:
    return 'title-total';
    case 2:
    return 'title-num';
    case 3:
    return 'title-date';
    default:
    return 'title-date';
  }
}

const objtest = {
  test1: 'title-total',
  test2: 'title-num',
  test3: 'title-date',
  test4: 'title-date'
}

function moneyItem() { 
  return (
    <div className="confirm-title">
      {moneyList.map((val, index) =>
      (<p className={objtest[`test${index +1}`]} key={val.key}>{val.label}</p>)
      )}
    </div>
  )
}

const Apply = () => {
  return (
    <div className="body-confirm">
      {moneyItem()}
      <div className="confirm-info">
        <p className="info-title">订单信息</p>
        {infotList.map(val => {
          return (
            <div className="info-content" key={val.key}>
              <p className="content-title">{val.label}</p>
              <p className="content-font">{val.value}</p>
            </div>
          )
        })}
      </div>
      <div className="confirm-btn">
      <button className="btn-next">下一步</button>
      </div>
    </div>
  )
}

export default Apply;
