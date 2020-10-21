import React from 'react'

const skills = (props) => {
    return (
        <section id="skills">
            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p>Below is a list of techincal knowledge skills along with a scale of how many years experience I have in each one. 
                        A full bar indicates most proficient and a skill I have worked on my whole career, a short bar indicates a skill I am just starting to learn.
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            { props.profile.map((skill) => {
                                let percent = Math.round(Math.round(skill.years / 13 * 100) / 10) * 10
                                return <li><span className={`bar-expand skill-${percent}`} /><em>{skill.name}</em></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default skills
