import React from 'react'
import EducationItem from './educationItem'

const education = (props) => {
    let items = props.profile.map(function (element) {
        return <EducationItem profile={element} />
    })
    return (
        <section id="education">
            <div class="row education">
                <div class="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div class="nine columns main-col">
                    {items}
                </div>
            </div>
        </section>
    )
}

export default education
