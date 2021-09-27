import Reverse from './components/Reverse'
import Count from './components/Count'
import React from 'react'
import ReactDOM from 'react-dom'

//this function displays the active component based on the props 
//true/false state
function Message(props){
    if(props.value){
        return <Reverse />
    }
    return <Count />
}

//this component generates a button that changes true/false states
//when the user clicks on the button
class SwitchState extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:true}
    }
    handleClick = () =>{
        this.setState({
            value : !this.state.value
        })
    }
    render(){
        return(
        <div>
            <Message value={this.state.value}></Message>
            
            <br/>
            <button onClick={this.handleClick}>Switch components</button>
        </div>
        )
    }
}


ReactDOM.render(<SwitchState/>,document.getElementById('root'));