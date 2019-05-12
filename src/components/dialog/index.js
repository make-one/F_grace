import React from "react"
import './index.scss'
import Close from '../../static/images/close.png'

class Dialog extends React.Component {

  closeDialog() {
    console.log('111111')
  }
  render() {
    return (
      <div className="body">
        <div className="body-cover"></div>
        <div className="body-dialog">
          <div className="dialog-titlt">
            <p>为了您及时收到物流信息</p>
            <p>请绑定手机号后购买</p>
          </div>
          <div className="dialog-form">
            <input placeholder="请输入手机号" className="form-input"></input>
            <input placeholder="请设置登录密码" className="form-input"></input>
            <div className="form-message">
              <input placeholder="请输入短信验证码" className="form-input-message"></input>
              <p className="message">发送验证码</p>
            </div>
          </div>
          <div className="dialog-button">
            <p className="button-font">下一步</p>
          </div>
          <img src={Close} className="close-cancle" onClick={this.closeDialog}></img>
        </div>
      </div>
    )
  }
}
export default Dialog;