import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';
import {
    BrowserRouter as Router, Switch, Route, Link, NavLink
  } from "react-router-dom";
class AppRoute extends Component {
    render() {
        return (
            <Router>
            <div>
                <Nav/>
                    <DieuHuongURL/>
                <Footer/>
            </div>
            </Router>
        );
    }
}

export default AppRoute;