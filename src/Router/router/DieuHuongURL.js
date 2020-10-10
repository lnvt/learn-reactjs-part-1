import React, { Component } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link, NavLink
  } from "react-router-dom";
import Product from '../components/Product';
import Home from '../components/Home';
import DetailProduct from '../components/DetailProduct';
import Contact from '../components/Contact';
class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <Route path="/sanpham">
                            <Product />
                        </Route>
                        <Route  path="/trangchu">
                            <Home />
                        </Route>
                        <Route exact path="/san-pham/:slug.:id.html" render={({match}) => (<DetailProduct match={match}/>)}>
                        </Route>
                        <Route path="/lienhe">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
        );
    }

}
export default DieuHuongURL;
