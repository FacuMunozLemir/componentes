import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/img/logo/logo.png"
import "./navbar.css"

function NavBar() {
    const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />;
    const facebook = <FontAwesomeIcon icon={faFacebook} />;
    const instagram = <FontAwesomeIcon icon={faInstagram} />;
    let indicator = document.querySelector('.nav-indicator');
    let items = document.querySelectorAll('.nav-item');

    useEffect(() => {
        items.forEach(function (item, index) {
            item.addEventListener('click', function (e) {
              handleIndicator(e.target);
            });
            item.classList.contains('is-active') && handleIndicator(item);
          }); 
    }, []) 


    function handleIndicator(el) {
        console.log(el);
        if(el){
            items.forEach(function (item) {
                item.classList.remove('is-active');
                item.removeAttribute('style');
            });
            indicator.style.width = "".concat(el.offsetWidth, "px");
            indicator.style.left = "".concat(el.offsetLeft, "px");
            indicator.style.backgroundColor = el.getAttribute('active-color');
            el.classList.add('is-active');
            el.style.color = el.getAttribute('active-color');
        }
    }



  return (
   <div className="navBarContainer">
        <div className="header">
            <img src={logo} alt="Logo de la cámara de comercio exterior de Jujuy" />
            <div className="redes">
                <a href="">{whatsapp}</a>
                <a href="">{instagram}</a>
                <a href="">{facebook}</a>
            </div>
        </div>
        <div className="navigation">
            <span className="nav-indicator"></span>
            <div className="navigation-items">
                <Link className='nav-item is-active' active-color="#C1001F">Inici</Link>
                <Link className='nav-item' active-color="#C1001F">Nosotros</Link>
                <Link className='nav-item' active-color="#C1001F">Noticias</Link>
                <Link className='nav-item' active-color="#C1001F">ExpoJuy</Link>
                <Link className='nav-item' active-color="#C1001F">Contacto</Link>
            </div>
        </div>
   </div>
  )
}

export default NavBar