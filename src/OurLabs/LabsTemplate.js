import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

function LabsTemplate (props) {

    //will be rendered if the dropdown is closed, or if no dropdown exists for the section
    const defaultContent = 
        <div className={props.Classes}>
            <h2>{props.Heading}</h2>
            {props.DefaultContent}
        </div>
    //if no dropdown exists, render just the default content
    if (props.ExpandedContent==null){
        return(defaultContent);
    }

    //if dropdown exists:
    //will be rendered if the dropdown is open--NOTE: default content is re-rendered
    else{
        const expandedContent = 
            <div className={props.Classes}>
                <h2>{props.Heading}</h2>
                {props.DefaultContent}
                {props.ExpandedContent}
            </div>
    
        //properties for the button that will be rendered as part of the dropdown
        const buttonAttributes = 
            {Text:'Show Less',
            ClickedText:'Show More',
            DefaultStyle: {
                color:'var(--io-blue)',
                borderColor:'var(--io-blue)',
                backgroundColor:'white'
            },
            ActivatedStyle:{
                backgroundColor: 'var(--io-blue)',
                color: 'white',
            }}


        return( 
            <Dropdown 
                DefaultContent={defaultContent}
                ExpandedContent={expandedContent}
                ToggleType={Button} 
                ToggleAttributes={buttonAttributes}
                className='lab-section'/>
        );
    }
}

export default LabsTemplate;

//props: Classes, Heading, DefaultContent, ExpandedContent
