import React from 'react';
import EventCard from './EventCard';
    //props: EventName, Description, Date, Status [upcoming, passed], SignupLink
import HeaderBanner from '../components/HeaderBanner.js';
    //props: ImageSrc, Text
import HeaderBackground from '../assets/events-banner.png';
import './EventPage.css'

function EventsPage() {
    return(
        <React.Fragment>
                <HeaderBanner
                        ImageSrc = {HeaderBackground}
                        Text = 'Events'
                />
                <EventCard
                    eventName='I/O Inspire With Robotics'
                    Date='February 26th and March 12th, 2023'
                    Description="Inspire With Robotics is our upcoming workshop for junior high students, designed to be an introduction into the wonderful world of robotics. Participants will have the opportunity to build and program robots to complete fun challenges and games, as well as learn about real world applications and recent innovations in the field of robotics! Our dedicated and knowledgeable student instructors will lead lessons and provide mentorship throughout to give participants the tools they need to succeed. All robots and food will be provided!"
                    Status='passed'
                    eventUrl=''
                />
                <EventCard
                    eventName='I/O Hack to Empower'
                    Date='March 25, 2020 to March 27, 2020'
                    Description="I/O Hack to Empower is a virtual hackathon for female and non-binary high school students. The hackathon is aimed at empowering girls and non-binary youth to learn hands-on coding skills, gain mentors, make friends, and improve their technical and career skills in a gender-inclusive, creative, and innovative setting! Teams collaborated to design solutions to issues impacting women and minorities, which were judged by predominantly female judging panels! Students also attended workshops and panels led by women in computer science!"
                    Status='passed'
                    eventUrl=''
                />
                <EventCard
                    eventName='I/O Hack: Pandemic'
                    Date='29, 2020 to May 31, 2020'
                    Description="This weekend-long virtual hackathon was hosted in the midst of the pandemic. As such, high school students were encouraged to hack from the comfort and safety of their own homes. Teams collaborated to design technology based solutions to issues arising from the pandemic, which were then assessed by a judging panel composed of industry professionals from leading-edge organizations. "
                    Status='passed'
                    eventUrl=''
                />
                <EventCard
                    eventName='I/O Hack: Jr.'
                    Date='February 2, 2020'
                    Description="I/O Hack: Jr. is a fun day-long hackathon designed to introduce middle school students to the world of technology and innovation! Teams of students in grades 6-9 collaborated to design and pitch their own software product to a judging panel. This hackathon included an introductory lesson and on-site high school mentors to support students as they complete their projects, as well as prizes for the top projects!"
                    Status='passed'
                    eventUrl=''
                />
        </React.Fragment>
    );
    }

export default EventsPage;