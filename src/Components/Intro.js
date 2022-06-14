import { render } from "@testing-library/react";
import React, { useEffect, useState, forwardRef, useRef } from "react";
import ProfilePics from "./ProfilePics";
import "./Styles/Intro.css";

function Intro() {
   const [counter, setCounter] = useState(0);
    useEffect(
        () => {
            const id = setInterval(()=>setCounter((oldCounter)=>(oldCounter +1)%2),8000);
            return() => {
                clearInterval(id);
            };
        }, []
    );
    // function renderImage(){
    //     if(counter === 0){
    //         return(
    //             <img className = "inner-image" src = {profile1}/>
    //         )
    //     }
    //     if (counter === 1){
    //         return(
    //             <img className = "inner-image" src = {profile2} />
    //         )
    //     }
    // }
    return ( 
        <div className="container">
            <div className="intro-container">
                <div data-aos="fade-right" className="picture">
                    {
                    ProfilePics.map(
                        (image) => {
                            if(counter === image.id){
                                return(
                                    <img className = "inner-image" src = {image.pic} />
                                )
                            }
                        }
                    )
                    }
                </div>
                <div  className="intro-content">
                    <div className="intro-header">
                        Hi! Marcus here!
                    </div>
                    <hr data-aos="fade-up"className="seperator"></hr>
                    <div data-aos="fade-up" className="intro-intro">
                    <p>I am a passionate individual who believes strongly in the synergetic use of technology and business to solve problems. I have a strong interest in business, finance and computer science. I actively seek opportunities to broaden my horizons and grow as a person, be it seeking new challenges, meeting new people, or learning in my free time.</p>

                    <p>Beyond all that, I am a friendly, dynamic and outgoing individual who enjoys stepping out of his comfort zone and remains undaunted in the face of setbacks! I love interacting with people and taking logical approaches to solve my problems. Feel free to contact me for business or career opportunities, or even if you just want to cultivate a meaningful friendship with me! :)</p>                </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;