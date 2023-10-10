import {useState, useEffect, useRef} from 'react';
import './Dropdown.css';

function Dropdown(props) {
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        if (dropdownOpen) {
            setdropdownOpen(false);
            const new_scrollY = window.scrollY+dropdownRef.current.getBoundingClientRect().y;
            window.scrollTo({top: new_scrollY - 100, behavior:'smooth'});
        }
        else {
            setdropdownOpen(true)
        };
    };

    // const dropdownRef = useRef(null);


    return(
        <div className='dropdown-section' ref={dropdownRef}>
             {dropdownOpen ? props.ExpandedContent : props.DefaultContent} 
             <div>
                <props.ToggleType Dropdown={dropdownOpen} Toggled={toggleDropdown} {...props.ToggleAttributes}/>
             </div>
        </div>
    );
}

export default Dropdown;

//props: DefaultContent, ExpandedContent, ToggleType
//optional: ToggleAttributes passed on to ToggleType
