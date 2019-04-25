import request from './baseApi';

function get(data) {
  return request({
    url: 'zprod/v1/product/categoryList.htm',
    method: 'get',
    data,
  });
}

function add(data) {
  return request({
    url: 'api/menus',
    method: 'post',
    data,
  });
}

export default {
  get,
  add,
};
