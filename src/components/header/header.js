import React from 'react'

const header = (props) => {
    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
                    {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                    {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
                </ul>
            </nav>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">{props.profile.name}</h1>
                    <h3>I am a <span>{props.profile.title}</span>
                    {props.profile.description} 
                    Let's <a className="smoothscroll" href="#about">start scrolling</a>
                        and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                    <hr />
                    <ul className="social">
                        <li><a href="#"><i className="fa fa-facebook" />{props.social.facebook}</a></li>
                        <li><a href="#"><i className="fa fa-twitter" />{props.social.twitter}</a></li>
                        <li><a href="#"><i className="fa fa-google-plus" />{props.social.googleplus}</a></li>
                        <li><a href="#"><i className="fa fa-linkedin" />{props.social.linkedin}</a></li>
                        <li><a href="#"><i className="fa fa-instagram" />{props.social.instagram}</a></li>
                        <li><a href="#"><i className="fa fa-dribbble" />{props.social.dribble}</a></li>
                        <li><a href="#"><i className="fa fa-skype" />{props.social.skype}</a></li>
                    </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
        </header>
    )
}

export default header
