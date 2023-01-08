import React from 'react';
import EventCard from './EventCard';
import './EventPage.css'

function EventsPage() {
    return(
        <React.Fragment>
                <EventCard
                    eventName='Robotics Workshop'
                    Date='January 31, 2023 | 11:00 AM to 1:30 PM'
                    Description="Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description "
                    Status='upcoming'
                    eventUrl='https://google.com'
                />
                <EventCard
                    eventName='Programming Workshop'
                    Date='January 31, 2100 | 11:45 PM to 12:30 PM'
                    Description="In this workshop you will be able to learn all about your favourite programming languages, like python and java. You will learn a bunch of random things you might need in the the future lol xD enter text here enter text here idk what else to say it will be fun :D"
                    Status='upcoming'
                    eventUrl='https://github.com'
                />
                <EventCard
                    eventName='Art Class!'
                    Date='September 25, 4848 | 11:21 PM to 4:30 AM'
                    Description="After this workshop you will be able to paint like Claude Monet and Leonardo Da Vinci. Paint a bunch of paintings and stuff Paint a bunch of paintings and stuff Paint a bunch of paintings and stuff Paint a bunch of paintings and stuff Paint a bunch of paintings and stuff Paint a bunch of paintings and stuff Paint a bunch of paintings and stuff "
                    Status='passed'
                    eventUrl='https://costco.ca'
                />
        </React.Fragment>
    );
    }

export default EventsPage;