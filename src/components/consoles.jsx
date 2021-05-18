import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Console from './console'

function Consoles(){

    const[consoles, setConsoles] = useState([]);
    const[selectedConsole, setSelectedConsole] = useState(null);

    useEffect(() => {
        axios.get('http://csc225.mockable.io/consoles').then((response) => {
            setConsoles(response.data);
        });

    }, [])

    if(consoles.length === 0) {
        return( <p>Loading...
        <img src="https://i.pinimg.com/originals/91/ae/b3/91aeb3eb9ee689f540fe097478fc6317.gif" alt="take your time..."/>
        </p>
        );

        
    }

    if(!!selectedConsole){
        return( <div>
            <Console id={selectedConsole}/>
            <button onClick={()=> setSelectedConsole (null)}>Reset</button>
            </div>
        );
    }

    return ( <div>
        {consoles.map((console) => {
        return (
            <p key={consoles.id}>
        <button onClick={() => setSelectedConsole (console.id)}>
            {console.name} - <img src={console.image} alt={console.name}/>
            </button>
            </p>
        );
        })}
    </div>
    );
}

export default Consoles;