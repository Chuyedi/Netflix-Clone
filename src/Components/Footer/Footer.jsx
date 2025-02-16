import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <div className="footer_data">
          <di>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </di>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Legal Notices</li>
              <li>Don't sell or share my personal Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Netflix Shop</li>
              <li>Cookie Prefernces</li>
              <li>Ad Choice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Corprate Information</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>  service code</p>
        </div>
        <div className="copy-write">&copy; 1997-2025 Netflix, Inc</div>
      </div>
    </div>
  );
}

export default Footer
