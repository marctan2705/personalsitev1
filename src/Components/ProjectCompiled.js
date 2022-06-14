import ProjectsList from "./ProjectsList"
import Projects from "./Projects"
import { useState } from "react";
function ProjectCompiled() {
    const [number, setNumber] = useState(0)
    function selectNextProject(){
        setNumber((number + 1) % ProjectsList.length);
    }
    function selectPreviousProject(){
        if(number >= 1){
            setNumber( number -1 )
        }
        else if(number === 0){
            setNumber(ProjectsList.length - 1)
        }
    }

    return ( 
        <div>
            {
            ProjectsList.map(
                (project) => 
                {
                    if(number === project.number) {
                        return(

                            <Projects name={project.name} description = {project.description} title = {project.title} github={project.github} images = {project.images} setNext = {selectNextProject} setPrevious = {selectPreviousProject}/>

                        )}
                }
            )
            }
        </div>
     );
}

export default ProjectCompiled;