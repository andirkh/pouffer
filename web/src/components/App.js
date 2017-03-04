import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
        <div className="container">
            <Navbar />
            <div>
                {this.props.children}
            </div>
            <Footer />
        </div>
    );
  }
}

export default App;
