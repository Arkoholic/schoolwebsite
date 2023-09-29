import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
            this.state = {
                counter: 10
            };
        }

        decrement(){
            this.setState({
                counter: this.state.counter -1,
        });
        }

        render(){
            return(
                <div>
                <h1>The count is: {this.state.counter}  </h1>
                <button onClick={()=> this.decrement()}>Decrement</button>
            </div>
            );
            
        }
    }
    

export default Counter;