import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./layouts/Main";
import Header from "./components/Header";
import "antd/lib/layout/style/index.css";

const Sandwiches = () => <h2>Sandwiches</h2>;

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li>
        <Link to="/tacos/bus">Bus</Link>
      </li>
      <li>
        <Link to="/tacos/cart">Cart</Link>
      </li>
    </ul>

    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);



const RouterContainer = () => (
  <Router>
    <div>
      <Header />

      <ul>
        <li>
          <Link to="/tacos">Tacos</Link>
        </li>
        <li>
          <Link to="/sandwiches">Sandwiches</Link>
        </li>
      </ul>

      <div className="container">
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>

    </div>

  </Router>
);

export default RouterContainer;