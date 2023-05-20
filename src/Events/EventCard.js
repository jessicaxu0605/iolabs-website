function EventCard(props){
    let status;
    let signup;
        if (props.Status==='upcoming'){
            status = <p class='eventStatus'>Upcoming Event!</p>;
            signup = <button class='eventBtn'>Register</button>;
        } else {
            status = <p class='eventStatus-passed'>Passed Event</p>;
            signup = <button class='eventBtn' style={{display:'none'}}>Register</button>
        }
    
    let eventClass;
        if  (props.Status==='upcoming'){
            eventClass = 'eventCard';
        } else {
            eventClass = 'eventCard-passed';
        }

    return(
        <div class={eventClass}>
            <div class="eventSection">
                <div class="eventHeader grid-span-2">
                    <h1 class='eventName'>{props.eventName}</h1>
                    {status}
                </div>
                <p class='eventDescription grid-span-2'>{props.Description}</p>
                <b class='eventDate'>{props.Date}</b>
                <a class="eventLink" href={props.eventUrl} target='_blank'>
                    {signup}
                </a>
                
            </div>
        </div>
    );

 
}

export default EventCard;

//props: EventName, Description, Date, Status [upcoming, passed], SignupLink