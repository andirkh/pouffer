import React, { Component } from 'react';
import '../styles/subscribe.css'

class Subscribe extends Component {
  render() {
    return (
        <div className="Subscribe-main">

            <div className="col-md-offset-1 col-md-5">
                <div className="container">
                    <h3>News :</h3>

                    <ul className="list-unstyled">
                        <li> [12/3] Website Baru dengan alamat asd </li>
                        <li> [12/3] Sekian Provinsi selesai </li>
                        <li> [12/3] Project Dimulai </li>
                    </ul>
                </div>
            </div>

            <div className="col-md-6">
                <div className="container">

                </div>
            </div>
        </div>
    );
  }
}

export default Subscribe;
