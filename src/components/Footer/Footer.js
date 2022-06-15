import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="Footer">
            <footer>
                <p>Dashboard - 2022</p>
                <p><a href="mailto:marcosvmagalhaes123@gmail.com">marcosvmagalhaes123@gmail.com</a></p>
                <p><a href="https://api.whatsapp.com/send?phone=5519983051888&text=Ola!+Vi+seu+Dashboard!">+55 (19) 98305-1888</a></p>
                <p>© Copyleft GNU GPL</p>
            </footer>
        </div>
    );
}

export default Footer;
