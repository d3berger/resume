import React from 'react'

const footer = (props) => {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {props.social.facebook && <li><a href={props.social.facebook}><i className="fa fa-facebook" /></a></li>}
                        {props.social.twitter && <li><a href={props.social.twitter}><i className="fa fa-twitter" /></a></li>}
                        {props.social.googleplus && <li><a href={props.social.googleplus}><i className="fa fa-google-plus" /></a></li>}
                        {props.social.linkedin && <li><a href={props.social.linkedin}><i className="fa fa-linkedin" /></a></li>}
                        {props.social.instagram && <li><a href={props.social.instagram}><i className="fa fa-instagram" /></a></li>}
                        {props.social.dribble && <li><a href={props.social.dribble}><i className="fa fa-dribbble" /></a></li>}
                        {props.social.skype && <li><a href={props.social.skype}><i className="fa fa-skype" /></a></li>}
                        {props.social.github && <li><a href={props.social.github}><i className="fa fa-github" /></a></li>}
                    </ul>
                    <ul className="copyright">
                        <li>© Copyright 2014 CeeVee</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
            </div>
        </footer>
    )
}

export default footer
