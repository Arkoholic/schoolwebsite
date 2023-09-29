import {Component} from "react";
class Message extends Component {
    render() {
        return <>
        <h1>This is your message code: {this.props.messageCode} </h1>
        <h2>The content of your message is: {this.props.messageContent} </h2>
        </> 
        
    }
}

export default Message;