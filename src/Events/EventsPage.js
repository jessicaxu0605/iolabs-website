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
                    Status='Upcoming Event!'
                    eventUrl='https://google.com'
                />
        </React.Fragment>
    );
    }

export default EventsPage;