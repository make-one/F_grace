import React from "react"
import './index.scss'
import dashImage from '../../static/images/dashboard.png'
import share from '../../static/images/share.png'
import arrow from '../../static/images/arrow.png'
import Dialog from '../../components/dialog/index'




function createDialog() {
  return (
    <div>

    </div>
  )
}
class Goods extends React.Component {
  state = {
    title: '蒲公英时光《气质少女班》 7月14-20日',
    address: '蒲公英时光《气质少女班》 7月14-20日 蒲公英时光总部',
    payFor: '¥ 8800',
    dialog: {

    }
  }

  choseNum() {
    console.log('11111')
  }


  render() {
    return (
      <div className="body-goods">
        {/* 头部图片 */}
        <div className="goods-image">
          <img src={dashImage} className="img-width"></img>
        </div>
        {/* 课程简介 */}
        <div className="goods-introduce">
          <div className="introduce-title">
            <p className="title-font">{this.state.title}</p>
            {/* <span className="title-share">分享</span> */}
            <div className="title-share">
              <img src={share} className="share-img"></img><br/>
              <span className="share-font">分享</span>
            </div>
          </div>
          <p className="introduce-address">{this.state.address}</p>
          <p className="introduce-pay">  
            <span className="pay-money">{this.state.payFor}</span> 
            <span className="pay-low">{this.state.payFor}.00</span>
          </p>
          <p className="introduce-Courier">快递: 包邮</p>
        </div>
        {/* 绑定手机 */}
        <p className="goods-chose" onClick={this.choseNum}>
          <span className="chose-font">请选择数量</span>
          <img src={arrow} className="chose-round"></img>
        </p>
  
        <Dialog
         props={this.state.dialog}></Dialog>
      </div>
    )
  }

  


}

export default Goods;
