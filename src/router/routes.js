import React, { lazy } from 'react';

const Order = lazy(() => import('@/views/order'));
const Goods = lazy(() => import('@/views/goods'));
const Detail = lazy(() => import('@/views/detail'));

export default store => [
  {
    path: 'order',
    component: Order,
    name: '主页',
  },
  {
    path: 'order/goods',
    component: Goods,
    name: '商品',
  },
  {
    path: 'order/detail',
    component: Detail,
    name: '详情',
  }
];
