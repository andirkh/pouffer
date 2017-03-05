import React, { Component } from 'react';
import '../styles/footer.css'

class Footer extends Component {
  render() {
    return (
        <div className="Footer-main">
            <div className="container">
                <div className="col-md-4">
                    <div className="Footer-height">
                    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                        <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
                    </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Footer-height">
                        <div className="text-center">
                            <h5>&copy; OpenPouffer 2015-2017 by @andirkh</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Footer-height">
                        <span property="dct:title">Open Pouffer </span>
                        by <span  property="cc:attributionName">pouffer.io </span>
                        is licensed under a
                        <br />
                        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                            Creative Commons Attribution 4.0 International License
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
