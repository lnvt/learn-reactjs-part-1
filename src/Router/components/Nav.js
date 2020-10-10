import React, { Component } from 'react';
import '../css/cssroute.css';
import {
    BrowserRouter as Router, Switch, Route, Link, NavLink
  } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
         <div className="menutop">
           <ul>
          <li>
            <NavLink activeClassName="chon" to="/trangchu">TRANG CHỦ</NavLink>
          </li>
          <li>
            <NavLink to="/sanpham">SẢN PHẨM</NavLink>
          </li>
          <li>
            <NavLink to="/lienhe">LIÊN HỆ</NavLink>
          </li>
        </ul>
        </div>
        );
    }
}

export default Nav;