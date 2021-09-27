import { Component } from 'react'

//this function is the main logic of the the count component. It splits the user's
//string into a char array (labeled 'arr') using the split method of the String object. 
//The length of the char array is returned to be displayed to the user
function CountChars(props) {
    const arr = props.split('');
    return arr.length;
}

//component that counts the number of characters in a string entered by the user
//in a text box. The character count is updated as the user is typing.
class Count extends Component {
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
            <form onSubmit={CountChars(this.state.userinput)}>
                <div>
                    <label>Enter your string: </label>
                    <input type='text' 
                    value={this.state.userinput} 
                    onChange={this.handleUserInputChange}/>
                    <br/>
                    <p>Your string length: {CountChars(this.state.userinput)} characters</p>
                </div>
            </form>
        )
    }
}

export default Count