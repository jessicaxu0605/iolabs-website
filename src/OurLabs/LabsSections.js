import LabsTemplate from "./LabsTemplate";

function Template(props){
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
            Dropdown={props.Dropdown}
        />
    );
}

function Advocacy(props){
    return(
        <LabsTemplate
            Classes = 'advocacy home-section'
            Heading ='Advocacy Lab'
            DefaultContent={
                <div>
                    <ul>
                        <li>We work with community groups to understand and address the barriers faced by underserved populations to STEM educational programming and other opportunities.</li>
                        <li>We initiate projects that focus on improving the accessibility, and the relevance and design of these programs and opportunities.</li>
                        <li>We collaborate with educational institutions on projects that aim to create systemic change.</li>
                    </ul>
                </div>
            }
            ExpandedContent= {
                <div>    
                    <p>Beakerhead is Calgary's largest STEAM exhibition. Their mandate is to globally advance education at the crossroads of art, science and engineering. Beakerhead believes that mixing diverse ideas, people and conversations accelerates creativity and innovation so we embrace the principles of equality, fairness and accessibility as a commitment to community.</p>
                </div>                
            }
            Dropdown={props.Dropdown}
        />
    );
}

function Education(props){
    return(
        <LabsTemplate
            Classes ='education home-section'
            Heading='Education Lab'
            DefaultContent={
                <p>
                    Free computer programming education for children from low-income households, including workshops, one-on-one mentorship, and coding challenges for prizes.
                </p>
            }
            ExpandedContent={
                <div>
                    <h3>I/OEd: Python Summer Camp</h3>
                    <p>
                        Students learn Python under the guidance of our experienced and passionate instructors. Basic programming concepts such as Variables, Loops, If-Statements, and Functions are covered in the “Beginner's Room,” while more advanced programming concepts such as Lists and Arrays are taught in the “Advanced Room.” Engagement is further supported through coding challenges, where students apply this knowledge through competition for prizes, with support offered by our weekly tutorials.
                    </p>
                    <h3>I/OEd: Robotics Summer Camp</h3>
                    <p>
                        Six weeks of free robotics education for Indigenous youth, including electronics, robot design and 3D printing, and computer programming. Recognizing the unique needs of Indigenous youth, Robotics Summer Camp runs in tandem with computer programming lessons, allowing participants to experience real world, hands-on applications of what they have learned in coding lessons and delivers much needed relevant programming for this population.
                    </p>
                </div>
            }

            Dropdown={props.Dropdown}
        />
    );
}


export {Advocacy, Education};