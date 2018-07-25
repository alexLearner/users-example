import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Main from "./Main";
import Upload from "./Upload";
import Create from "./Create";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getUsers } from "../actions/users";
import { PROJECT_URL } from "../config";
import "./Layout.css";

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
  {
    path: "/upload",
    component: Upload,
  },
  {
    path: "/edit/:id",
    component: Create,
    isEdit: true,
  },
];

const RouteWithSubRoutes = route => (
  <Route
    path={PROJECT_URL + route.path}
    exact={route.exact}
    render={props => (
      <route.component
        routes={route.routes}
        isEdit={route.isEdit}
        {...props}
      />
    )}
  />
);

class RouterLayout extends Component {
  componentDidMount() {
    if (!this.props.fetched) {
      this.props.getUsers();
    }
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
  state => ({
    fetched: state.users.fetched,
  }),
  dispatch => ({
    getUsers: bindActionCreators(getUsers, dispatch)
  }),
)(RouterLayout);
