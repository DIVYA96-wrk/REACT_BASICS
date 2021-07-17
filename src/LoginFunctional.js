import {useState} from 'react';
import {useHistory} from 'react-router-dom'
function LoginFunctional(){
    const history=useHistory();
    const [username , setUsername]=useState("");
    const [password , setPassword]=useState("");
    const usernameChange = (event)=>{
        setUsername(event.target.value)
    }
    const passwordChange=(event)=>{
        setPassword(event.target.value)
    }
    const buttonClick=(event)=>{
        event.preventDefault();
        if(username=="divya" && password=="divya@123")
        {
            alert("sucessful..!!!")
            history.push("/home")
        }
        else{
            alert("Invalid credentials")
        }
    }
    return <div className="container">
        <h1>Login Form</h1>
        <h2>Haii..{username}....YOUR password is {password}</h2>
   <form onSubmit={buttonClick}>
   <input className="form-control" type="text" name="username" onChange={usernameChange}/>
   <input className="form-control" type="password" name="password" onChange={passwordChange} />            
  
   <button className="btn btn-primary" type="submit" >SUBMIT</button>
   </form>

</div>
}

export default LoginFunctional;