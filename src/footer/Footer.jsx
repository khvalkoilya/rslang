import React from 'react';

import './_footer.scss';

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <a href="https://google.com">About us</a>
        <div>
          <a href="https://google.com" className="footerFedbackLink">
            <img src="./assets/images/icoMail.png" alt="icoMail" />
          </a>
          <a href="https://google.com" className="footerFedbackLink">
            <img src="./assets/images/icoYoutube.png" alt="icoYoutube" />
          </a>
          <a href="https://google.com" className="footerFedbackLink">
            <img src="./assets/images/icoTelegram.png" alt="icoTelegram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
