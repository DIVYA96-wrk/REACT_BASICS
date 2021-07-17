import React from "react"
import {withRouter} from "react-router"

class Login extends React.Component{
    state={
        username:"",
        password:""
    }
    
    userChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    passChange=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    buttonclick=(event)=>{
        event.preventDefault();
        if(this.state.username=="divya" && this.state.password=="divya@123")
        {
            alert("success")
            this.props.history.push("/home")
        }
        else{
            alert("invalid credentials")
        }
    }
    render(){
        return <div className="container">
             <h1 >Hello from class {this.props.name} {this.props.last}</h1>
            <form onSubmit={this.buttonclick}>
            <input className="form-control" type="text" name="username" onChange={this.userChange}/>
            <input className="form-control" type="password" name="password" onChange={this.passChange}/>            
           
            <h1> Hello , {this.state.username} and your password is {this.state.password}</h1>
            <button className="btn btn-primary" type="submit" >SUBMIT</button>
            </form>
        
        </div>
    }
    
}    ;

export default withRouter(Login)