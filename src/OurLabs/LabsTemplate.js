import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

function LabsTemplate (props) {
    const defaultContent = 
        <div className={props.Classes}>
            <h2>{props.Heading}</h2>
            {props.DefaultContent}
        </div>
    
    if (props.ExpandedContent==null){
        return(defaultContent);
    }
    else{
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
                ToggleType={Button} 
                className='lab-section'/>
        );
    }
}

export default LabsTemplate;

//props: Classes, Heading, DefaultContent, ExpandedContent, Dropdown