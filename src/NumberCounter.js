import React, { Component,useState } from 'react';

export default class NumberCounter extends Component
{
   constructor(props)
     {
         super(props);
         this.state = {counter: 0};
         this.onIncrement = this.onIncrement.bind(this);
     }
     onIncrement()
     {
         console.log("Incremented");
         this.setState({counter:this.state.counter + 1});
     }
     onDecrement()
     {
         console.log("Decremented");
         this.setState({counter:this.state.counter - 1});
     }
     sayHello =() =>{
        console.log("Hello react");
     }
     render(){
         return( <div>
             <label>Counter : {this.state.counter}</label>
             <br/><br/>
             <button onClick={this.onIncrement}>Increment</button>
             <button onClick={this.onDecrement}>Decrement</button>
                         <button onClick={this.sayHello}>say hello</button>
             </div>
         );
     }
}

export function NumberCounter2()
{
 let [state,setState] = useState({counter:0});

 function onIncrement()
 {
     setState({counter:state.counter + 1});
 }
 function onDecrement()
 {
    setState({counter:state.counter - 1});
 }
 return(
     <div><br/>
     <label>Counter : { state.counter }</label>
     <br/><br/>
     <button onClick={onIncrement}>Increment</button> &nbsp;
     <button onClick={onDecrement}>Decrement</button>
     </div>
 );
}