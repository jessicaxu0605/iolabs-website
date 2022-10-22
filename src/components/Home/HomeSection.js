import DropdownArrow from "../DropdownArrow";
import Dropdown from "../Dropdown";

function HomeSection (props) {
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
                ToggleType={DropdownArrow} 
                className='home-section'/> 
        );
    }
}

export default HomeSection;

//props: Classes, Heading, DefaultContent, ExpandedContent, Dropdown