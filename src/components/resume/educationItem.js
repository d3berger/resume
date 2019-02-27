import React from 'react'

const educationItem = (props) => {
    return (
        <div className="row item">
            <div className="twelve columns">
                <h3>{props.profile.institute}</h3>
                <p className="info">
                <a href={props.profile.location} >{props.profile.title}</a> <br /> <em className="date">{props.profile.date}</em>
                </p>
            </div>
        </div>
    )
}

export default educationItem
