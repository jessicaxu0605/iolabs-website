function EventCard(props){
    let status;
    let signup;
        if (props.Status==='upcoming'){
            status = <p className='eventStatus'>Upcoming Event!</p>;
            signup = <button className='eventBtn'>Register</button>;
        } else {
            status = <p className='eventStatus-passed'>Passed Event</p>;
            signup = <button className='eventBtn' style={{display:'none'}}>Register</button>
        }
    
    let eventClass;
        if  (props.Status==='upcoming'){
            eventClass = 'eventCard';
        } else {
            eventClass = 'eventCard-passed';
        }

    return(
        <div className={eventClass}>
            <div className="eventSection">
                <div className="eventHeader grid-span-2">
                    <h1 class='eventName'>{props.eventName}</h1>
                    {status}
                </div>
                <p className='eventDescription grid-span-2'>{props.Description}</p>
                <b className='eventDate'>{props.Date}</b>
                <a className="eventLink" href={props.eventUrl} target='_blank'>
                    {signup}
                </a>
                
            </div>
        </div>
    );

 
}

export default EventCard;

//props: EventName, Description, Date, Status [upcoming, passed], SignupLink