import React, { lazy } from 'react';

const Dashboard = lazy(() => import('@/views/dashboard'));

export default store => [
  {
    path: 'dashboard',
    component: Dashboard,
    name: '首页',
  },
];
