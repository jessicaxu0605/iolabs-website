import {useState} from 'react';

function Dropdown(props) {
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const toggleDropdown = () => {dropdownOpen ? setdropdownOpen(false) : setdropdownOpen(true); console.log('toggled')};
    
    return(
        <div className='dropdown-section'>
            {dropdownOpen ? props.ExpandedContent : props.DefaultContent} 
            <props.ToggleType Dropdown={dropdownOpen} Toggled={toggleDropdown}/>
        </div>
    );
}

export default Dropdown;

