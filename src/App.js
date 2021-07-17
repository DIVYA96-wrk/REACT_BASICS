import Sample from './Sample'
import Login  from './Login';
import LoginFunctional  from './LoginFunctional';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
function App(){
  return <div> <h1>HELLO WORLD!! </h1>
   {/* <Sample name="user1" last="last1"/> */}

   <BrowserRouter>
   <Switch>
  <Route path="/" exact>
   <LoginFunctional/>
   </Route>
   <Route path="/home">
     <Home />
   </Route>
   </Switch>
   </BrowserRouter>
   



  </div>;
}

export default App;
 