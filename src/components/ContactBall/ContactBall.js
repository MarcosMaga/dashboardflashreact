import React from "react";
import './ContactBall.css';

function ContactBall(props){
    return(
        <div className="ContactBall">
            <a target="_blank" href={props.link}>
                <img alt="Contact" src={props.linkImage}/>
            </a>
        </div>
    );
}

export default ContactBall;