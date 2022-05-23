import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <div className="footer-links">
            <p>Thanks for visiting 💛</p>
            <p>Get in touch </p>
            <a href="https://www.linkedin.com/in/charmaine-llacuna"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="https://github.com/Char-Alexis"><ion-icon name="logo-github"></ion-icon></a>
            <a href="mailto:charmaine.llacuna@yahoo.com"><ion-icon name="mail-outline"></ion-icon></a>
        </div>
    )
    
};

export default Footer;