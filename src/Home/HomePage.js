import React from 'react';
import {Link} from 'react-router-dom';
import HomePageLab from './HomePageLab';
import Slideshow from './Slideshow';
import Button from '../components/Button'
import './Home.css';

function HomePage() {
    return(
        <React.Fragment>
            <Slideshow/>
            <main className='home' style={{paddingBottom:'0'}}>
                <div className='main-connector'/>
                <div className='about-us'>                 
                    <h1 className='section-heading blue-text'>About Us</h1>
                    <div className='who-are-we'>
                        <div className='bullet'/>
                        <h2 className='blue-text'>Who are we?</h2>
                        <p>
                            I/O LABS is a provincially incorporated, non-profit organization dedicated to assisting youth in accessing impactful STEM education and opportunities.
                        </p>
                    </div>
                    <div className='what-we-do'>
                        <div className='bullet'/>
                        <h2 className='blue-text'>What we do</h2>
                        <p>
                            We aim to foster STEM accessibility, proficiency and engagement through our Advocacy Lab, Education Lab, Events Lab, and Opportunities Lab. We ensure our programs are always free and focus on authentic engagement with underrepresented communities.
                        </p>
                    </div>
                    <div className='horizontal-connector'></div>
                    <div className='horizontal-connector spacing'></div>
                </div>
                <div className='connector' style={{left:'calc(4em)', margin:'0', backgroundColor:'var(--io-yellow)'}}></div>

                <section className='our-labs'>
                    <div className='connector' style={{left:'calc(var(--margin) + 4em)', margin:'0'}}></div>
                    <div className='main-style'>
                        <h1 className='section-heading' style={{color:'white'}}>Our Labs</h1>
                    </div>
                    <div className='connector' style={{left:'calc(var(--margin) + 4em)', margin:'0'}}></div>
                    <div className='labs'>
                        <HomePageLab 
                            Position='left'
                            Heading='Advocacy Lab'
                            Content='Projects that focus on improving the accessibility, and the relevance and design of these programs and opportunities.'
                        />
                        <HomePageLab 
                            Position='center'
                            Heading='Education Lab'
                            Content='Projects that focus on improving the accessibility, and the relevance and design of these programs and opportunities.'
                        />
                        <HomePageLab 
                            Position ='center'
                            Heading='Events Lab'
                            Content='Projects that focus on improving the accessibility, and the relevance and design of these programs and opportunities.'
                        />
                        <HomePageLab 
                            Position='right'
                            Heading='Opportunities Lab'
                            Content='Projects that focus on improving the accessibility, and the relevance and design of these programs and opportunities.'
                        />
                    </div>
                    <Link to='/labs' className='button-link' style={{textDecoration:'none'}}>
                        <Button
                            Toggled={()=>null}
                            Text='Learn More >'
                            DefaultStyle={{color:'white', borderColor:'white'}}
                            ActivatedStyle={{
                                color:'var(--io-red)',
                                borderColor:'white',
                                backgroundColor:'white'
                            }}
                        />
                    </Link>
                </section>
            </main>
        </React.Fragment>
    );
}

export default HomePage;
//LabsTemplate props: Classes, Heading, DefaultContent, ExpandedContent, Dropdown
