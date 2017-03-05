import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            {this.props.children}
            <Footer />
        </div>
    );
  }
}

export default App;
