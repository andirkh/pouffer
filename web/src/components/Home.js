import React, { Component } from 'react';
// Styles
import '../styles/home.css';
import kalbar from '../../public/resources/image/Kalimantan_Barat.png'

class Home extends Component {
  render() {
    return (
        <div className="Home-content ">
            <img src={kalbar} className="Home-img img-responsive center-block"/>
            <h1 className="text-center"> Membantu Project Kalian</h1>
            <h4 className="text-center marginers"> dengan asset 2D gratis tentang kebudayaan Indonesia</h4>


                <div className="row">
                    <div className="col-lg-8 col-centered Home-main">
                        <div className="col-sm-12 paddingers">
                            <div className="container">
                                <h3> Perkenalkan :</h3>
                                <p>Lorem ipsum carls jr asu asu asu asu asu asu kslaksjlkjslkjalkjs dsalsksk</p>
                            </div>
                        </div>
                        <div className="col-sm-6 paddingers">
                            <div className="container">
                                <h3>Download :</h3>

                                <ul className="list-unstyled">
                                    <li> <a href="#"> via DropBox </a> </li>
                                    <li> <a href="#"> via GitHub </a> </li>
                                    <li> <a href="#"> File .png saja </a> </li>
                                    <li> <a href="#"> Full Version </a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 paddingers">
                            <div className="container">
                                <h3>News :</h3>

                                <ul className="list-unstyled">
                                    <li> [12/3] Website Baru dengan alamat asd </li>
                                    <li> [12/3] Sekian Provinsi selesai </li>
                                    <li> [12/3] Project Dimulai </li>
                                    <li> [12/3] Oalah iya iya aku ads </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
  }
}

export default Home;
