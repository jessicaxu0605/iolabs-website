import {Link} from 'react-router-dom';
import LabsTemplate from "./LabsTemplate";
    //props: Classes, Heading, DefaultContent, ExpandedContent
import BeakerheadLogo from '../assets/Beakerhead-logo.png';
import Beakerhead from '../assets/Beakerhead.jpg';
import HackToEmpowerBanner from '../assets/HackToEmpowerBanner.png';


//not displayed; template for future use if more labs sections need to be added
function Template(){
    return(
        <LabsTemplate
            Classes = ''
            Heading =''
            DefaultContent={
                <div>
                </div>
            }
            ExpandedContent= {
                <div>    
                </div>                
            }
        />
    );
}


function Advocacy(){
    return(
        <LabsTemplate
            Classes = 'advocacy home-section'
            Heading ='Advocacy Lab'
            DefaultContent={
                <div>
                    <p>At I/O Labs, we:</p>
                    <ul>
                        <li>work with community groups to understand and address the barriers faced by underserved populations to STEM educational programming and other opportunities.</li>
                        <li>initiate projects that focus on improving the accessibility, and the relevance and design of these programs and opportunities.</li>
                        <li>collaborate with educational institutions on projects that aim to create systemic change.</li>
                    </ul>
                </div>
            }
            ExpandedContent= {
                <div> 
                    <h3>Beakerhead 2021</h3> 
                    <img src={BeakerheadLogo}/> 
                    <p>Beakerhead is Calgary's largest STEAM exhibition. Beakerhead believes that mixing diverse ideas, people and conversations accelerates creativity and innovation, a belief that also we subscribe to at I/O Labs. We embrace the principles of equality, fairness, and accessibility as a commitment to community.</p> 
                    <img src={Beakerhead}/>
                    <p>At Beakerhead 2021, I/O Labs had the incredible and memorable opportunity to host robot games with IndigiSTEAM and our robotics summer camp students!</p>
                    <br/>

                    <h3>I/O Hack to Empower</h3> 
                    <img src={HackToEmpowerBanner}/>
                    <p>Women have made significant contributions in STEM, and yet, they remain underrepresented in the field of STEM. We believe we have a responsibility to improve the diversity and representation within STEM, which led us to create Hack to Empower, our first ever hackathon dedicated for girls and non-binary youth! Participants were tasked with creating innovative solutions to issues that specifically impact women or minority groups.</p>
                </div>                
            }
            
        />
    );
}

function Education(){
    return(
        <LabsTemplate
            Classes ='education home-section'
            Heading='Education Lab'
            DefaultContent={
                <p>
                    Providing engaging, accessible, and free robotics and computer programming education for youth. 
                    <br/>
                    We particularly focus on educational opportunities for youth who are underserved in STEM, including girls, indigenous youth, and children from low-income households. Our education opportunities include workshops, one-on-one mentorship, and coding challenges for prizes.
                </p>
            }
            ExpandedContent={
                <div>
                    <br/>
                    <h3>I/OEd: Python Summer Camp</h3>
                    <p>
                        Students learn Python under the guidance of our experienced and passionate instructors. Basic programming concepts such as Variables, Loops, If-Statements, and Functions are covered in the “Beginner's Room,” while more advanced programming concepts such as Lists and Arrays are taught in the “Advanced Room.” Engagement is further supported through coding challenges, where students apply this knowledge through competition for prizes, with support offered by our weekly tutorials.
                    </p>
                    <br/>

                    <h3>I/OEd: Robotics Summer Camp</h3>
                    <p>
                        Six weeks of free robotics education for Indigenous youth, including electronics, robot design and 3D printing, and computer programming. Recognizing the unique needs of Indigenous youth, Robotics Summer Camp runs in tandem with computer programming lessons, allowing participants to experience real world, hands-on applications of what they have learned in coding lessons and delivers much needed relevant programming for this population.
                    </p>
                    <br/>

                    <h3>Tech Tuesdays and Future Fridays</h3>
                    <p>
                        Our infographic series, bringing approachable and applicable tech information to students’ social media feeds!
                        Tech Tuesdays provides informative lessons and tutorials on various scientific concepts, with a focus on hardware and real life applications. Future Fridays explores today’s technological advancements, which will become the everyday technology of the future.
                    </p>
                    <br/>
                    <p>
                        Coming soon to our website!
                    </p>
                </div>
            }
        />
    );
}

function Events(){
    return(
        <LabsTemplate
            Classes = 'events home-section'
            Heading ='Events Lab'
            DefaultContent={
                <div>
                    <p>
                        Hackathons, workshops, summer camps, and more! Our events aim to further students' understanding of topics in STEM, and to transfer their understanding from the classroom to real world applications. We believe that hands-on opportunities are invaluable for providing engaging and meaningful education and fostering a lifelong passion for STEM. 
                    </p>
                    <br/>
                    <p>
                        Visit our <Link to='/events'>events page</Link> for up-to-date information on all of our upcoming and past events!
                    </p>
                    <br/>
                </div>
            }
        />
    );
}

function Opportunities(){
    return(
        <LabsTemplate
            Classes = 'advocacy home-section'
            Heading ='Opportunities Lab'
            DefaultContent={
                <div>
                    <p>
                        Established in 2019, we are a student run non-profit organization dedicated to fostering programming proficiency and building community in computer science through events, education, and other opportunities. Because our team is youth led, it is always evolving; each year, we offer leadership opportunities for students to join our team at I/O Labs and further our mission to make STEM accessible for all.
                    </p>
                    <br/>
                    <p>
                        Are you interested in gaining leadership and volunteer experience, while making an impact? Stay tuned for new opportunities coming soon.  
                    </p>
                    <br/>
                </div>
            }
        />
    );
}



export {Advocacy, Education, Events, Opportunities};
