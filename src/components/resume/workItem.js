import React from 'react'

const workItem = (props) => {
    return (
        <div className="row item">
            <div className="twelve columns">
                <h3>{props.profile.employer}</h3>
                <p className="info">{props.profile.description} <br /> <em className="date">{props.profile.location}</em></p>
                { props.profile.position.map((item) => {
                    return (
                        <p>{item.title}<br />
                        {item.duration}<br />
                        {item.details}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default workItem
