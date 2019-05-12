import React from "react"
import './index.scss'
import Detail1 from '../../static/images/detail1.png'
import Detail2 from '../../static/images/Detail2.png'
import Detail3 from '../../static/images/detail3.png'
import Detail4 from '../../static/images/detail4.png'
import Detail5 from '../../static/images/detail5.png'
import Detail6 from '../../static/images/detail6.png'
import Detail7 from '../../static/images/detail7.png'
import Detail8 from '../../static/images/detail8.png'
import Detail9 from '../../static/images/detail9.png'
import Detail10 from '../../static/images/detail10.png'
import Detail11 from '../../static/images/detail11.png'
import Detail12 from '../../static/images/detail12.png'
import Detail13 from '../../static/images/detail13.png'
import Detail14 from '../../static/images/detail14.png'
import Detail15 from '../../static/images/detail15.png'


class Detail extends React.Component {
  state = {
    imgArr: []
  }

  componentWillMount() {
    // for (let i =1; i<16; i++) {
    //   this.state.imgArr.push(Detail + i)
    //   console.log(this.state.imgArr)
    // } 
    this.state.imgArr.push(Detail1)
    this.state.imgArr.push(Detail2)
    this.state.imgArr.push(Detail3)
    this.state.imgArr.push(Detail4)
    this.state.imgArr.push(Detail5)
    this.state.imgArr.push(Detail6)
    this.state.imgArr.push(Detail7)
    this.state.imgArr.push(Detail8)
    this.state.imgArr.push(Detail9)
    this.state.imgArr.push(Detail10)
    this.state.imgArr.push(Detail11)
    this.state.imgArr.push(Detail12)
    this.state.imgArr.push(Detail13)
    this.state.imgArr.push(Detail14)
    this.state.imgArr.push(Detail15)
    
  }

  imgComponent() {
    return this.state.imgArr.map((it, index) => {
      return (
        <img src={it} className="img-icon" key={index}></img>
      ) 
    })
  }
  render() {
    return (
      <div>
        {/* <div>
          <img src={Detail1}></img>
        </div> */}
        {this.imgComponent()}
      </div>
    )
  }
}

export default Detail;
