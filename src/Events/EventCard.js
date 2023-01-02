import Dropdown from '../components/Dropdown';
import DropdownArrow from '../components/DropdownArrow';

function EventCard(props){

    return(
        <div class='eventCard'>
            {/* <div>
                <img class='eventImage' src='{require(props.eventImg)}' alt={props.eventName + ' image'}></img>
            </div> */}
            <div class="eventSection">
                <div class="eventHeader grid-span-2">
                    <h1 class='eventName'>{props.eventName}</h1>
                    <p class='eventStatus'>{props.Status}</p>
                </div>
                <p class='eventDescription grid-span-2'>{props.Description}</p>
                <p class='eventDate'>{props.Date}</p>
                <a class="eventLink" href={props.eventUrl} target='_blank'>
                    <button class='eventBtn'>Register</button>
                </a>
                
            </div>
        </div>
    );

    // eventName, Date, Description, Status, Register, eventUrl, eventImg

    
    // const hasDate = ()=>
    //     props.Date ? 
    //     <h2 class='event-date'>{props.Date}</h2> : 
    //     null;

    // const isUpcoming = ()=> {
    //     if (props.Status==='upcoming'){
    //         <p class='eventStatus'>Upcoming event</p>
    //     }
    // }
    
    // const defaultContent = 
    // <div className={props.EventName}>
    //     <h1>{props.EventName}</h1>
    //     {hasDate()}
    // </div>
    
  
    // const expandedContent = 
    //     <div className={props.Classes}>
    //         <h2>{props.Heading}</h2>
    //         {props.DefaultContent}
    //         {props.ExpandedContent}
    //     </div>

    // return( 
    //     <Dropdown 
    //         DefaultContent={defaultContent}
    //         ExpandedContent={expandedContent} 
    //         ToggleType={DropdownArrow} 
    //         className='home-section'/> 
    // );

}

export default EventCard;

//props: EventName, Description, Date, Status, SignupLink