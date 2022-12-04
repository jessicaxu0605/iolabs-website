import Dropdown from '../components/Dropdown';
import DropdownArrow from '../components/DropdownArrow';

function EventCard(props){
    
    const hasDate = ()=>
        props.Date ? 
        <h2 class='event-date'>{props.Date}</h2> : 
        null;

    const isUpcoming = ()=> {
        if (props.Status==='upcoming'){}
    }
    
    const defaultContent = 
    <div className={props.EventName}>
        <h1>{props.EventName}</h1>
        {hasDate()}
    </div>
    
  
    const expandedContent = 
        <div className={props.Classes}>
            <h2>{props.Heading}</h2>
            {props.DefaultContent}
            {props.ExpandedContent}
        </div>

    return( 
        <Dropdown 
            DefaultContent={defaultContent}
            ExpandedContent={expandedContent} 
            ToggleType={DropdownArrow} 
            className='home-section'/> 
    );

}

export default EventCard;

//props: EventName, Description, Date, Status, SignupLink