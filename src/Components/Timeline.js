import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as Birthday} from "./Resources/birthday.svg"
import {ReactComponent as WorkIcon} from "./Resources/work.svg"
import {ReactComponent as Hwach} from "./Resources/hci.svg"
import {ReactComponent as Berkeley} from "./Resources/berkeley.svg"
import {ReactComponent as Nhps} from "./Resources/nhps.svg"
import {ReactComponent as NTU} from "./Resources/ntu.svg"
import "./Styles/Timeline.css"

function Timeline() {
    return (
        <div className='section-container'>
            <div className='timeline'>
            <VerticalTimeline layout='2-columns' className='timeline-component'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#0E86D4', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #0E86D4' }}
                    iconStyle={{ background: '#0E86D4', color: '#000' }}
                    icon= {<Birthday />}
                >
                    <h3 className="vertical-timeline-element-title">Birth of Marcus</h3>
                    <h4 className="vertical-timeline-element-subtitle">Singapore, SG</h4>
                    <p>27 may 1999</p>
            </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0E86D4', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #0E86D4' }}
                iconStyle={{ background: '#0E86D4', color: '#FF0000' }}
                icon={<Nhps />}
            >
                <h3 className="vertical-timeline-element-title">Nan Hua Primary School</h3>
                <h4 className="vertical-timeline-element-subtitle">Singapore, SG</h4>
                <p>
                2005 - 2011
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0E86D4', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #0E86D4' }}
                iconStyle={{ background: '#0E86D4', color: '#FF0000' }}
                icon={<Hwach />}
            >
                <h3 className="vertical-timeline-element-title">Hwa Chong Institution</h3>
                <h4 className="vertical-timeline-element-subtitle">Singapore, SG</h4>
                <p>
                IP programme, ESIS scholarship holder, Captain of Judo Club (HS & JC), 88.75 UAP (5As, 1B), Outstanding Student Award, Hwa Chong Diploma Distinction
                </p>
                <p>2012 - 2017</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0E86D4', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #0E86D4' }}
                iconStyle={{ background: '#0E86D4', color: '#fff' }}
                icon={<NTU />}
            >
                <h3 className="vertical-timeline-element-title">Nanyang Technological University</h3>
                <h4 className="vertical-timeline-element-subtitle">BA Engineering Science (Computer Science) & MSc Technology Management</h4>
                <h4 className="vertical-timeline-element-subtitle">Singapore, SG</h4>
                <p>
                    Renaissance Engineering Scholar, Dean's List Recepient, First Class Honours, Vice President of Tanjong Hall
                </p>
                <p>2020 - Present</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0E86D4', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #0E86D4' }}
                iconStyle={{ background: '#0E86D4', color: '#fff' }}
                icon={<Berkeley />}
            >
                <h3 className="vertical-timeline-element-title">University Of California, Berkeley</h3>
                <h4 className="vertical-timeline-element-subtitle">GLOBE Visiting Student Exchange Programme</h4>
                <h4 className="vertical-timeline-element-subtitle">California, Berkeley</h4>
                <p>
                    2022 - 2023
                </p>
            </VerticalTimelineElement>

            </VerticalTimeline>
            </div>
        </div>
     );
}

export default Timeline;