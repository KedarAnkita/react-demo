import React from 'react';

export default function HelloC(props)      //props
{
    return (<h1>Hello 
        <span>World 
        <div>{props.salutation}</div>
        </span>
        </h1>);
}
export class Hello1 extends React.Component{
    render()
    {
    return (<h1>Class2</h1>);
    }
}