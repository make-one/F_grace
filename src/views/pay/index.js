import React from "react";
import Navigator from '@/utils/router';

const pay = () => {
  Navigator.push('/state')
}

const Apply = () => {
  return  <div onClick={pay}>支付页</div>
}

export default Apply;
