import React from "react";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const instagram = <FontAwesomeIcon icon={faInstagram} />;
const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />;
const facebook = <FontAwesomeIcon icon={faFacebook} />;

function NavBar() {
  return (
    <NavBar>
      <div className="navBarContainer">
        <div className="upperRow">
          <img src="" alt="logo" />
          <div className="redes">
            {whatsapp}
            {instagram}
            {facebook}
          </div>
        </div>
        <div className="lowerRow"></div>
      </div>
    </NavBar>
  );
}

export default NavBar;
