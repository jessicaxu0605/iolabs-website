import PersonCard from './PersonCard';
    //props: Class, Name, Position, Image, Bio, Website, LinkedIn, Instagam, Twitter, Facebook, Github
import HeaderBanner from '../components/HeaderBanner.js';
    //props: ImageSrc, Text
import HeaderBackground from '../assets/our-team-banner.png'; 
import React from 'react';
import './OurTeam.css';
import Yasmin from './Yasmin.jpg'; 
import Jessica from './Jessica.jpg'; 


function OurTeamPage() {
    return(
        <React.Fragment>
            <div className='main-connector'/>
            <HeaderBanner
                    ImageSrc = {HeaderBackground}
                    Text = 'Meet Our Team!'
            />
            <main>
                <PersonCard
                    Name='Celina Chen'
                    Position='Education Diector'
                    Bio=''
                />
                <PersonCard
                    Class='Isaac'
                    Name='Isaac Wong'
                    Position='Logistics Director'
                    Bio='Back in 2020, I participated in I/OHack Jr, a hackathon hosted by I/O Labs, at the University of Calgary. Since then, I wanted to be involved in I/O Labs’ initiative to help provide underrepresented youth with opportunities in STEM. In 2022, I joined the non-profit organization as a logistics director. To me, helping others to take their first step of their dream to have a future career in STEM is truly rewarding.'
                />
                <PersonCard
                    Name='Jessica Xu'
                    Position='President'
                    Bio="I am a grade 12 student at Sir Winston Churchill High School. I joined I/O Labs because I wanted to share my interest in computer science with underrepresented groups and I am excited to futher our mission of accessible STEM education! In addition to coding, I love graphic design, painting, and vexillology."
                    Image={Jessica}
                    Instagram='https://www.instagram.com/jessica._.x_/'
                    LinkedIn='https://www.linkedin.com/in/jessica-xu-6047b2247'
                />
                <PersonCard
                    Name='Joseph Song'
                    Position='IT Director'
                    Bio=''
                />
                <PersonCard
                    Name='Max Xiang'
                    Position='Editorial Director'
                    Bio=''
                />
                <PersonCard
                    Name='Nate Greco'
                    Position='Finance Director'
                    Bio=''
                />
                <PersonCard
                    Name='Owen Plumb'
                    Position='Curriculum Director'
                    Bio=''
                />
                <PersonCard
                    Name='Piaoyi'
                    Position='Web Development'
                    Bio='As a current student of Westmount Charter School, Piaoyi has been very interested in computer science, math, and geography. He also enjoys photography and his favorite animal is the cow.'
                    Github='https://github.com/PiaoyiWu'
                    Twitter='https://twitter.com/PiaoyiWu'
                    Instagram='https://www.instagram.com/mrmilkymoo/'
                />
                <PersonCard
                    Name='Yasmin Motahhary'
                    Position='Marketing Director'
                    Bio='Hey there! My name is Yasmin, and I am a grade 12 student at Sir Winston Churchill High School. I decided to join I/O Labs as the Marketing Director due to my interest in computer science and advocacy for women in STEM!'
                    Image={Yasmin}
                    Instagram='https://www.instagram.com/yasminn.m/'
                    LinkedIn='https://www.linkedin.com/in/yasmin-motahhary'
                />

            </main>
        </React.Fragment>
    );
}

export default OurTeamPage;
