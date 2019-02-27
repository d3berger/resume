import React from 'react'

const about = (props) => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{props.profile.me}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{props.profile.name}</span><br />
                                <span>{props.profile.address}</span><br />
                                <span>{props.profile.phone}</span><br />
                                <span><a href={`mailto:${props.profile.email}`}>{props.profile.email}</a></span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <button className="button"><i className="fa fa-download" />Download Resume</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about
