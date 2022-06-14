import "./Styles/Skills.css"
import Skilllist from "./Skilllist.js"
import { useState } from "react";

function Skills() {
    const [selected, setSelected] = useState(0)
    return ( 
        <div className="skills-container">
            <div className="skill-card">
            <div data-aos="fade-right" className="skills-selector">
            {
                    Skilllist.map(
                        (skill) =>
                        {return(<div className={selected == skill.id ? "skill-name-selected" : "skill-name" } key={skill.id} onClick = {()=>{setSelected(skill.id)}}> 
                            {skill.Name}
                        </div>)}
                        )
                    
                }
            </div>
            <div className="skills-info">

                    
                    <div>
                        {
                            Skilllist.map(
                                (skill) =>
                                {
                                    if (skill.id == selected){
                                        {return(
                                            <div className="skills-info-background">
                                            <div data-aos="fade-in" className="skills-info-header">
                                                Background
                                            </div>
                                            <div data-aos="fade-left" className="skill-para">{
                                                skill.Description.map(
                                                    (description) => {
                                                        return(
                                                            <p>{description}</p>
                                                        )
                                                    }
                                                )
                                                
                                                }</div>
                                            </div>
                                        )}
                                    }
                                }
                            )
                        }
                    </div>


                    {
                            Skilllist.map(
                                (skill) =>
                                {
                                    if (skill.id == selected){
                                        {return(
                                            <div className="skills-info-experience">
                                                <div data-aos="fade-in"className="skills-info-header">
                                                    Experiences
                                                </div>
                                                <div className="skill-experience">
                                                {skill.Icons.map(
                                                    (icon) =>
                                                    {
                                                        return(
                                                            <img data-aos="fade-up" className="skill-icon" src={icon}/>
                                                        )
                                                    }
                                                )}
                                                </div>
                                            </div>
                                        )}
                                    }
                                }
                            )
                    }
                </div>
                </div>        
            </div>
     );
}

export default Skills;