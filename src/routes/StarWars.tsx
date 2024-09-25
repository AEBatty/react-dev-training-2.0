import React, {useEffect, useState} from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

// mocks data
const initialState = [
    { name: 'Obi wan kenobi' },
    { name: 'Darth Vader' },
    { name: 'Look skywalker' },
    { name: 'R2D2' },
    { name: 'R2D3' },
];

export const StarWars = () => {

const[result, setResult] = useState<Array<string>>([]);
const[loading, isLoading] = useState<boolean>(false);
const[error, setError] = useState("");
const[errorB, isError] = useState<boolean>(false);




    useEffect(() => {
        isLoading(true);
        const response = async () => {
            try{
                const response = await fetch("https://swapi.dev/api/people");
        
            const text = await response.json();
            
            isLoading(false);
            setResult(() => {return text.results});
            }catch(e){
                console.log(e);
                isError(true);
                setError("" + e);
                isLoading(false);
            }
        };

        response();
    }, [])

    // render
    console.log('render');
    return (
        <div>
            {loading?
                <Dimmer active><Loader/></Dimmer> 
                : 
                error?
                <li>
                    {error}
                </li>
                :
                <li>
                    {result.map((p, i) => { return <ul key={i}> {p.name}</ul> })}
                </li>      
            }
        </div>
    );
};
