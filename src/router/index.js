import React, { lazy, Suspense, Component } from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';

import Navigator from '@/utils/router';
import flatRoutes from './routes';

import PageLoader from '@/components/PageLoader';

const LoginPage = lazy(() => import('@/views/login'));
const NoMatchPage = lazy(() => import('@/views/not-found'));

const routes = flatRoutes();

class AppRouter extends Component {
  componentDidMount() {
    Navigator.history.listen((location, action) => {
      this.routeChange(location, action);
    });
  }

  routeChange(l, a) {
    console.log(l);
    console.log(a);
  }

  render() {
    return (
      <Suspense fallback={<PageLoader />}>
        <Router history={Navigator.history}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/order/confirm" />} />
            {/* <Route
              exact
              path="/login"
              render={props => {
                return <LoginPage {...props} />;
              }}
            /> */}
            {routes.map(item => {
              return <Route key={item.path} path={`/${item.path}`} component={item.component} />;
            })}
            <Route component={NoMatchPage} />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default AppRouter;
