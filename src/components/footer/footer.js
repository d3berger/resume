import React from 'react'

const footer = (props) => {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook" />{props.profile.facebook}</a></li>
                        <li><a href="#"><i className="fa fa-twitter" />{props.profile.twitter}</a></li>
                        <li><a href="#"><i className="fa fa-google-plus" />{props.profile.googleplus}</a></li>
                        <li><a href="#"><i className="fa fa-linkedin" />{props.profile.linkedin}</a></li>
                        <li><a href="#"><i className="fa fa-instagram" />{props.profile.instagram}</a></li>
                        <li><a href="#"><i className="fa fa-dribbble" />{props.profile.dribble}</a></li>
                        <li><a href="#"><i className="fa fa-skype" />{props.profile.skype}</a></li>
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
