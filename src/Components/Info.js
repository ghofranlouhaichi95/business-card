import rectangle90 from '../images/Rectangle90.png' // relative path to image 
import React from 'react';
import {MdEmail} from "react-icons/md";
import {FaLinkedin} from "react-icons/fa";

export default function Info() {
    return (
        <div className="infoSection">
            <img alt="office-face" src={rectangle90} width="350px"/>
            <h2>Ghofran Louhaichi</h2> 
            <h3>Frontend Developer</h3> 
            <h4>ghofranlouhaichi.website</h4> 
            <div className="buttons">
                <button className="btn" id="btn1" type="button"><MdEmail />Email</button>
                <button className="btn" id="btn2" type="button"><FaLinkedin />Linkedin</button>
            </div>   
        
        </div>

    )
}


