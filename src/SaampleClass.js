import React from "react"

class SampleClass extends React.Component{
    state={
        username:""
    }
    
    userChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    render(){
        return <div>
            
            <input type="text" name="username" onChange={this.userChange}/>
            <h1>Hello from class {this.props.name} {this.props.last}</h1>
        <h1>Hello from class  {this.state.username}</h1>
        </div>
    }
    
}    ;

export default SampleClass