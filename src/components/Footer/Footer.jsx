import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <div className="footer-links">
            
            <div className="font">Thanks for visiting! 💛</div>
            <p>Get in touch via email at ㅤ 
                <span>
                    <a className="email" href="mailto:charmaine.llacuna@yahoo.com"> charmaine.llacuna@yahoo.com </a> 
                
                </span> 
                or find me at
                </p>
            <a className="linkElement" href="https://www.linkedin.com/in/charmaine-llacuna"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a className="linkElement" href="https://github.com/Char-Alexis"><ion-icon name="logo-github"></ion-icon></a>
            <a className="linkElement" href="mailto:charmaine.llacuna@yahoo.com"><ion-icon name="mail-outline"></ion-icon></a>
        </div>
    )
    
    
};

export default Footer;