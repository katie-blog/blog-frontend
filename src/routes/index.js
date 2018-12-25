import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import BlogList from '../pages/blog/list/list'
import BlogDetail from '../pages/blog/detail/detail'
import BlogCreate from '../pages/blog/create/create'
import BlogUpdate from '../pages/blog/update/update'
import UserDetail from '../pages/user/detail/detail'

const routes = [
    {
        path: "/list",
        component: BlogList
    }, {
        path: "/detail/:blogId",
        component: BlogDetail
    }, {
        path: "/create",
        component: BlogCreate
    }, {
        path: "/update",
        component: BlogUpdate
    }, {
        path: "/user/detai",
        component: UserDetail
    }
]

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

function RouteConfig() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={BlogList} />
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default RouteConfig;