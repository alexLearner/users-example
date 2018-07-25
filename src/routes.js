import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Main from "./layouts/Main";
import Create from "./layouts/Create";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { getUsers } from "./actions/users";

const routes = [
  {
    path: "/",
    exact: true,
    component: Main
  },
  {
    path: "/create",
    component: Create
  },
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

class RouterLayout extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <Router>
        <div className="layout">
          <Header />

          <div className="container layout_content">
            {
              routes.map((route, i) =>
                <RouteWithSubRoutes key={i} {...route} />
              )
            }
          </div>

          <Footer />
        </div>
      </Router>
    )
  }
}


export default connect(
  null,
  dispatch => ({
    getUsers: bindActionCreators(getUsers, dispatch)
  }),
)(RouterLayout);
