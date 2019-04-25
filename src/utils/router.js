// import platform from 'config/platform';
import { createBrowserHistory } from 'history';
import { stringify } from './query-string';

const history = createBrowserHistory();
// const browserHistory = hashHistory

const push = url => {
  const params = {
    type: 1,
  };
  let path = url;

  if (url.indexOf('?') > -1) {
    path = `${url}&${stringify(params)}`;
  } else {
    path = `${url}?${stringify(params)}`;
  }

  history.push(path);
};

const goBack = step => {
  history.goBack(step);
};

const replace = url => {
  const params = {
    type: 1,
  };
  let path = url;

  if (url.indexOf('?') > -1) {
    path = `${url}&${stringify(params)}`;
  } else {
    path = `${url}?${stringify(params)}`;
  }

  history.replace(path);
};

const Navigator = {
  push,
  goBack,
  replace,
  history,
};

export default Navigator;
