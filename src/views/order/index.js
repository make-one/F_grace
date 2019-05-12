import React, { Component, lazy } from "react";
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import Navigator from '@/utils/router';
import { tabs } from './data'

import './style'

const Goods = lazy(() => import('@/views/goods'));
const Detail = lazy(() => import('@/views/detail'));

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: 'goods'
    };
  }

  // 获取订单状态
  componentDidMount() {

  }

  clickNav (nav) {
    this.setState({ path: nav.id })
    Navigator.push(nav.path)
  }

  switch = ({ match }) =>{
    const { id } = match.params;
    console.log(id)
  
    switch(id) {
      case 'goods':
      return <Goods />;
      case 'detail':
      return <Detail />;
      default:
      return <Goods />;
    }
  }

  render() {
    const { path } = this.state
    return (
      <div className="container">
        <div className="nav">
          {
            tabs.map((item) => 
            <div key={item.id} className={`nav-item ${item.id === path ? 'selected' : ''}`}>
              <a onClick={() => this.clickNav(item)} >{item.name}</a>
            </div>)
          }
        </div>
        <div className="content">
          <Route path="/order/:id" component={this.switch} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispathToProps = {
};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(Layout);
