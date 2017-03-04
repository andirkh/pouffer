import React, { Component } from 'react';
import { Link } from 'react-router';
// Styles
import '../styles/navbar.css'

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                 </button>
              <Link className="navbar-brand Navbar-link" to="/">
                Open Pouffer
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/progress" className="Navbar-link"> <span className="glyphicon glyphicon-flash" aria-hidden="true"></span> Progress</Link></li>
                    <li><Link to="/docs" className="Navbar-link"> <span className="glyphicon glyphicon-book" aria-hidden="true"></span> Docs</Link></li>
                    <li><Link to="/about" className="Navbar-link"> <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> About</Link></li>
                    <li><Link to="https://github.com" className="Navbar-link"> <span className="glyphicon glyphicon-download" aria-hidden="true"></span> Download </Link></li>
                </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;
