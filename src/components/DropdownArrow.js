
function DropdownArrow (props) {
    
    return(
        props.Dropdown ? 
        <button className='dropdown-arrow open' onClick={()=>props.Toggled()}></button> : 
        <button className='dropdown-arrow closed' onClick={()=>props.Toggled()}></button>
        );
}

export default DropdownArrow;