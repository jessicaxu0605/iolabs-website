import {useState} from 'react';

function Dropdown(props) {
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const toggleDropdown = () => {dropdownOpen ? setdropdownOpen(false) : setdropdownOpen(true); console.log('toggled')};
    

    return(
        <div className='dropdown-section' style={{margin:'1rem 0'}}>
             {dropdownOpen ? props.ExpandedContent : props.DefaultContent} 
             <div>
                <props.ToggleType Dropdown={dropdownOpen} Toggled={toggleDropdown} {...props.ToggleAttributes}/>
             </div>
        </div>
    );
}

export default Dropdown;

//<props.ToggleType Dropdown={dropdownOpen} Toggled={toggleDropdown}/>
