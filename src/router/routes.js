import React, { lazy } from 'react';

const Order = lazy(() => import('@/views/order'));
const payState = lazy(() => import('@/views/pay-state'));
const Apply = lazy(() => import('@/views/apply'));
const Pay = lazy(() => import('@/views/pay'));
const Confirm = lazy(() => import('@/views/confirm'));

export default store => [
  {
    path: 'state',
    component: payState,
    name: '支付状态',
  },
  {
    path: 'order',
    component: Order,
    name: '主页',
  },
  {
    path: 'order/apply',
    component: Apply,
    name: '分期申请',
  },
  {
    path: 'order/pay',
    component: Pay,
    name: '支付首付',
  },
  {
    path: 'order/comfirm',
    component: Confirm,
    name: '确认订单',
  },
];
