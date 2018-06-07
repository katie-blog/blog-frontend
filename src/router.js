import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/index/IndexPage';
import BlogListPage from './routes/blogs/list/list';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/index" exact component={IndexPage} />
        <Route path="/blog/list" exact component={BlogListPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
