import React, { Component } from 'react';
// Styles
import '../styles/home.css';
import kalbar from '../../public/resources/image/Kalimantan_Barat.png'

class Home extends Component {
  render() {
    return (
        <div className="Home-content container">
            <div className="col-md-6">
                <img src={kalbar} className="Home-img img-responsive"/>
            </div>
            <div className="col-md-6">
                <div className="Home-height">
                    <h1 > Asset 2D untuk Projek Kalian</h1>
                    <p className="Home-text"> Open Pouffer membantu kalian dengan menyediakan asset 2D gratis tentang kebudayaan Indonesia. Berguna untuk Tugas kuliah, membuat produk kreatif seperti Game, kemasan produk, dan untuk kepentingan pribadi maupun komersial.</p>
                    <div className="col-sm-6">
                        <button className="btn btn-success Home-button"> pelajari selengkapnya </button>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-primary Home-button"> download </button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
