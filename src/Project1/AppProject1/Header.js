import React, { Component } from 'react';

//Alt + Shift + F
class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-3">PROJECT MANAGEMENT</h1>
                    <p className="lead">STAFF</p>
                    <hr className="my-2" />
                    <p>WITH DATA JSON</p>
                </div>
            </div>
        );
    }
}

export default Header;