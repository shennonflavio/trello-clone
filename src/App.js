import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Login from './Components/Login';
import Home from './Components/Home';
import Board from './Components/Board';
import Signup from './Components/Signup';
import TeamSettings from './Components/TeamSettings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
     
     <Router  >
     <Navbar/>
      <Switch>
        
        <Route exact path="/" component={Index}/>
        <Route  path="/Home" component={Home}/>
        <Route path="/Board" component={Board}/>
        <Route path="/Signup" component={Signup}/>
        <Route  path="/Login" component={Login}/>
        
        <Route path="/TeamSettings" component={TeamSettings}/>
        
      </Switch>
    
  </Router>
      
      
    </div>
  );
}

export default App;
