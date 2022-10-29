import TwitterIcon from '../images/TwitterIcon.png' // relative path to image 
import FacebookIcon from '../images/FacebookIcon.png' // relative path to image 
import InstagramIcon from '../images/InstagramIcon.png' // relative path to image 
import GitHubIcon from '../images/GitHubIcon.png' // relative path to image 
import React from 'react'


export default function Footer() {
    return(
        <div className="footerSection">
            <div className='icons'>
                <img alt="Twitter" src={TwitterIcon} />
                <img alt="Facebook"  src={FacebookIcon}/>
                <img alt="Instagram"  src={InstagramIcon}/>
                <img alt="Github"  src={GitHubIcon} height="25px" width="25px" />
            </div>
        
        </div>
    )
}