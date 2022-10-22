import React from 'react';
import {Advocacy, Education} from './LabsSections';
import HomeSection from './HomeSection';
import Slideshow from './Slideshow';

function HomePage() {
    return(
        <React.Fragment>
            <Slideshow/>
            <main>
                <HomeSection
                    Classes='our-mission'
                    Heading='Our Mission'
                    DefaultContent={
                        <p>
                            I/O LABS is a provincially incorporated, non-profit organization dedicated to assisting youth in accessing impactful STEM education and opportunities. We raise funds to ensure our programs are always free and focus on authentic engagement with underrepresented communities.
                        </p>
                    }
                    />
                <HomeSection
                    Classes='what-we-do'
                    Heading='What We Do'
                    DefaultContent={
                        <p>
                            We are a youth driven organization that aims to foster STEM accessibility, proficiency and engagement through its Advocacy Lab, Education Lab, Events Lab, and Opportunities Lab.
                        </p>
                    }
                    />
                <div class='divider'>
                    <hr/>
                </div>
                <Advocacy/>
                <Education/>
            </main>
        </React.Fragment>
    );
}

export default HomePage;
//HomeSection props: Classes, Heading, DefaultContent, ExpandedContent, Dropdown