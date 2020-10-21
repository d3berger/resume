import React from 'react'
import Education from './education'
import Work from './work'
import Skills from './skills'

const resume = (props) => {
    return (
        <div id="resume">
            <Education profile={props.profile.education} />
            <Work profile={props.profile.work} />
            <Skills profile={props.profile.skills} />
        </div>
    )
}

export default resume
