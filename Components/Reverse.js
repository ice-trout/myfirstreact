import { Component } from 'react'

//this function (titled switcheroo to avoid keywords) is the main logic of the reverse 
//string component. The user's string is split into a char array (titled arr) with the
//split function of the String object. The reverse function of the array class is returned
//to be displayed to the user
function Switcheroo(props) {
    const arr = props.split('');
    return arr.reverse();
}

//Component that reverses the order of a user entered string in a text box. The reversed
//string is displayed as the user enters the string in the text box
class Reverse extends Component {
    constructor(props){
        super(props)
        this.state = {
            userinput: ''
        }
    }
    handleUserInputChange = (event) => {
        this.setState({
            userinput: event.target.value
        })
    }
    render(){
        return(
            <form onSubmit={Switcheroo(this.state.userinput)}>
                <div>
                    <label>Enter your string: </label>
                    <input type='text' 
                    value={this.state.userinput} 
                    onChange={this.handleUserInputChange}/>
                    <br/>
                    <p>Your string reversed: {Switcheroo(this.state.userinput)}</p>
                </div>
            </form>
        )
    }
}

export default Reverse
https://calendar.google.com/calendar/embed?src=0pem3k98o82dm4keqbrc2ee7d4%40group.calendar.google.com&ctz=America%2FDenver
