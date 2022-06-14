import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import "./Styles/Projects.css";
import githubimg from "./Resources/github.png"
import next from "./Resources/next.png"
//To be completed
function Projects({name, images, description, title, github, setNext, setPrevious}) {
    const [count, setCount] = useState(0)
    const length =  images.length
    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => (oldCount + 1) % length), 8000);
        return () => {

        };
      }, []);
    useEffect(()=> {
        Aos.init({duration :2000});
        Aos.refresh();
    }, []
    );
    return ( 
        <div className="projects-container">
            <div className="section-container-projects">
                <div className="button-container">
                    <img className="previous-button" src={next} onClick={setPrevious}/>
                </div>
                <div className="projects-content-holder">
                    <div data-aos="fade-right" className="image-holder">
                        {
                            images.map(
                                (img) =>
                                {
                                    if(img[1] === count && img[2] == "t"){
                                        return(
                                            <img src = {img[0]} className = "display-projects-image" />
                                        )
                                    }
                                    else if(img[1] === count && img[2] == "w"){
                                        return(
                                            <img src = {img[0]} className = "display-projects-image-wide" />
                                        )
                                    }
                                }
                            )
                        }
                    </div>
                    <div data-aos="fade-left" className="projects-description-holder">
                        <div  className="projects-title">
                            {name}
                            {/* <a href={github}><img className="github-link" src={githubimg}/></a> */}
                        </div>
                        <hr data-aos-duration="3000" className="projects-line"></hr>
                        <div className="projects-subtitle">{title}</div>
                        <div >
                            <ul className="description-list">{
                            description.map(
                                (pointer) => {
                                    return(
                                        <li>{pointer}</li>
                                    )
                                }
                            )
                        }</ul>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <img className="next-button" src={next} onClick={setNext} />
                </div>
            </div>
        </div>
     );
}

export default Projects;