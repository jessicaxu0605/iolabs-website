import {useState} from 'react';

function Button (props) {
    const [buttonState, setButtonState] = useState('default');

    const buttonStyle = () => 
    buttonState==='default'?
    {
        color: props.Color,
        borderColor: props.BorderColor,
        backgroundColor: props.BackgroundColor
    } :
    {
        color: props.ActivatedColor,
        borderColor: props.ActivatedBorderColor,
        backgroundColor: props.ActivatedBackgroundColor
    };

    
    return(
        <div className='button-container'>
            <button 
                style={buttonStyle()}
                onMouseEnter={()=>setButtonState('activated')} 
                onMouseLeave={()=>setButtonState('default')}
                onClick={()=>props.Toggled()}
                className='button'>
                    {props.Content}
            </button>
        </div>
    );
}

export default Button;