function HomePageLab (props){

    
    const horizontalConnector = () =>{
        if (props.Position==='left'){
            return(
                <div style={{
                    backgroundColor: 'white',
                    position: 'relative',
                    height: '8px',
                    width: 'calc(8.5em + 4px)',
                    left:'calc(8.5em + 4px)'
                }}></div>
            );
        } else if (props.Position==='right') {
            return(
                <div style={{
                    backgroundColor: 'white',
                    position: 'relative',
                    height: '8px',
                    width: 'calc(8.5em + 4px)',
                }}></div>
            );
        } else {
            return(
            <div style={{
                backgroundColor: 'white',
                position: 'relative',
                height: '8px',
                width: 'calc(34em)',
                left:'calc(-8.5em - 4px)'
            }}></div>
            );
        } 
    }
    
    return(
        <div className='homepage-lab'>
            {horizontalConnector()}
            <div className='connector'/>
            <div className='inline-bullet'></div>            
            <h2>{props.Heading}</h2>
            <p>{props.Content}</p>
        </div>
    );
}

export default HomePageLab;