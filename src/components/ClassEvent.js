import { Component } from "react";
class ClassEvent extends Component {
    handleClick(){
               alert("clicked");
    }
    render(){
        return(
            <div>This is how class events are used.
                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}

export default ClassEvent;