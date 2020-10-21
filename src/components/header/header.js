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
                    <li><a className="smoothscroll" href="#education">Education</a></li>
                    <li><a className="smoothscroll" href="#work">Work</a></li>
                    <li><a className="smoothscroll" href="#skills">Skills</a></li>
                    {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
                </ul>
            </nav>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">{props.profile.name}</h1>
                    <h3>
                        <span>{props.profile.title}</span>
                        {props.profile.description}
                    </h3>
                    <hr />
                    <ul className="social">
                        {props.social.facebook && <li><a href={props.social.facebook}><i className="fa fa-facebook" /></a></li>}
                        {props.social.twitter && <li><a href={props.social.twitter}><i className="fa fa-twitter" /></a></li>}
                        {props.social.googleplus && <li><a href={props.social.googleplus}><i className="fa fa-google-plus" /></a></li>}
                        {props.social.linkedin && <li><a href={props.social.linkedin}><i className="fa fa-linkedin" /></a></li>}
                        {props.social.instagram && <li><a href={props.social.instagram}><i className="fa fa-instagram" /></a></li>}
                        {props.social.dribble && <li><a href={props.social.dribble}><i className="fa fa-dribbble" /></a></li>}
                        {props.social.skype && <li><a href={props.social.skype}><i className="fa fa-skype" /></a></li>}
                        {props.social.github && <li><a href={props.social.github}><i className="fa fa-github" /></a></li>}
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
