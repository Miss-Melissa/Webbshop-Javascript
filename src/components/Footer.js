import React from 'react';
import '../styles/Footer.css'
import Phone from '../images/mobile-screen.svg'
import Mail from '../images/envelope.svg'
import Shoes from '../images/Shoes.png'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
             {/* Column2 */}
             <div className="col"> 
          <img src={Shoes} alt='' width='150' height='150' />
        </div>
          {/* Column1 */}
          <div className="col">
            <h4>Meza</h4>
            <div className="list-styled">
              <p>
                Vi har ett maxat utbud med det allra
                <br />
                senaste modet från ungefär 350 varumärken
                <br />
                som , Nike, Adidas, Jordans, Givency med mera.
                <br />
              </p>
            </div>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Kontakt</h4>

            <p>Gustavslundsvägen 151 D
                <br />
                167 51 Bromma</p>
                <br/>
            <div className="list-styled">
              <p><img src={Mail} alt='' width='15' height='15' /> Meza@support.com</p>
              <p><img src={Phone} alt='' width='15' height='15' /> + 46 702 567 89</p>
           
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MeZa | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;