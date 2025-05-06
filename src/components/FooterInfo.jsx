import React from "react";

const FooterInfo = () => {
  return (
    <>
      <div className="footer-info">
        <div className="footer-logo">
          <img src="/src/assets/images/footer-logo.png" alt="" />
        </div>
        <div className="footer-contact-info">
          <p>
            <i className="bi bi-phone" />
            13234-774464
          </p>
          <p>
            <i className="bi bi-envelope" />
            anghorag@support.gmail.com
          </p>
        </div>
        <div className="footer-social">
          <h4>Join our social links</h4>
          <div className="footer-social-link">
            <a href="#">
              <i className="bi bi-facebook" />
            </a>
            <a href="">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterInfo;
