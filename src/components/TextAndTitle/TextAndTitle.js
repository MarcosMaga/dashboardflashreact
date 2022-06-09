import React from "react";
import './TextAndTitle.css'

function TextAndTitle(props){
    return(
        <div className="TextAndTitle">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
}

export default TextAndTitle;