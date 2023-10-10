import {useState} from 'react';
import './Button.css';

function Button (props) {
    const [buttonState, setButtonState] = useState('default');

    const buttonStyle = () => 
    buttonState==='default'?
    props.DefaultStyle :
    {...props.DefaultStyle,...props.ActivatedStyle,...{transition: '200ms ease-in'}}
 
    
    return(
        <div className='button-container'>
            <button 
                style={buttonStyle()}
                onMouseEnter={()=>setButtonState('activated')} 
                onMouseLeave={()=>setButtonState('default')}
                onClick={()=>props.Toggled()}
                className='button'
            >
            {props.Dropdown==false ? props.ClickedText : props.Text}
            </button>
        </div>
    );
}

export default Button;

//props: Toggled, ClickedText(optional), Text, DefaultStyle (optional), ActivatedStyle (optional)
