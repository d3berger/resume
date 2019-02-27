import React from 'react'
import WorkItem from './workItem'

const work = (props) => {
    return (
        <div className="row work">
            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
                {props.profile.map((item) => {
                    return <WorkItem profile={item} />
                })}
            </div>
        </div>
    )
}

export default work
