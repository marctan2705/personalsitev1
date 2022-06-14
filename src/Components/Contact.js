import "./Styles/Contact.css"
//import "./Styles/Contact2.css"
import linkedin from "./Resources/linkedin.png"
import github from "./Resources/github.png"
import gmail from "./Resources/gmail.png"
import medium from "./Resources/medium.png"
import whatsapp from "./Resources/whatsapp.png"
import telegram from "./Resources/telegram.png"
import instagram from "./Resources/instagram.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import resume from "./Resources/TanSongHuangMarcusResume.pdf"

function Contact() {
    useEffect(() => {
        AOS.init({duration: 2000});
        AOS.refresh();
      }, []);
    return ( 

        // Original contact
        <div className="contact-section">
            <div className="contact-container">
                <div className="contact-organiser">
                    <div data-aos= "fade-down" className="contact-header">
                        Contact me!
                    </div>
                    <hr data-aos= "zoom-in" className="contact-seperator"/>
                    <div className="contact-type">
                        <div data-aos= "fade-up" className="contact-links">
                            <div className="contact-socials">Socials: </div>
                            <div className="logo-holder-social">
                                <a href="https://wa.me/+6583873999"><img className="contact-logo" src={whatsapp} /></a>
                                <a href="https://t.me/marctan2705"><img className="contact-logo" src={telegram} /></a>
                                <a href="mailto:marctan2705@gmail.com"><img className="contact-logo" src={gmail} /></a>
                                <a href="https://www.linkedin.com/in/tansonghuang/"><img className="contact-logo" src={linkedin} /></a>
                                <a href="https://github.com/marctan2705"><img className="contact-logo" src={github} /></a>                            </div>
                        </div>
                        <div data-aos= "fade-up" className="contact-links-blogs">
                            <div className="contact-socials">My Blogs: </div>
                            <div className="logo-holder">
                                <a href="https://medium.com/@marctan2705"><img className="contact-logo" src={medium} /></a>
                                <a href="https://instagram.com/xiaomandahunter99"><img className="contact-logo" src={instagram} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href={resume} download className="resume-holder" data-aos="fade-up">
                <div className="resume-button">
                        Download My Resume!
                </div>
                </a>
            </div>
        </div>
        // <div className="contact-container">
        //     <div className="contact-holder">
        //         <div className="direct-contact">
        //             <div className="direct-contact-header">
        //                 My Profiles:
        //                 <div className="profile-icons">
        //                 <a href="https://www.linkedin.com/in/tansonghuang/"><img className="contact-logo" src={linkedin} /></a>
        //                 <a href="https://github.com/marctan2705"><img className="contact-logo" src={github} /></a>
        //                 </div>
        //             </div>
        //             <div>
        //                 <p className="direct-contact-header">
        //                     Or drop me a message at: 
        //                 </p>
        //                 <p>
        //                     Phone: +65 83873999
        //                 </p>
        //                 <p>
        //                     Email: marctan2705@gmail.com/mtan102@e.ntu.edu.sg
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="blogs">

        //         </div>
        //         <div className="Resume">

        //         </div>
        //     </div>
        // </div>
     );
}

export default Contact;