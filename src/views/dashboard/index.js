import React from "react";
import './index.scss'
import Navigator from '@/utils/router';

const data = {
  query: {
    title: '香港皇家优雅女子学堂',
    publicIcon: '',
    publicLink: 'www.baidu.com',
  }
}

function linkJump() {
  Navigator.push('www.baidu.com')
  console.log('jjjjjj')
}

const Dashboard = () => {
  return (
    <div className="body-dashboard">
      {/* 标题，公众号名称 */}
      <p className="dashboard-title">{data.query.title}</p>
      {/* 超链，指向公众号，可发消息，查看历史记录等 */}
      <div className="dashboard-link">
        {/* <Image src=""></Image> */}
        <span onClick={linkJump}>{data.query.title}</span>
      </div>
    </div>
  )
}

export default Dashboard;
