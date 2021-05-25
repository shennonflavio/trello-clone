import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Board from './Components/Board';
import TeamSettings from './Components/TeamSettings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <Router>
     <Navbar/>
      <Switch>
        <Route  path="/Home" component={Home}/>
        <Route path="/Board" component={Board}/>
        <Route path="/TeamSettings" component={TeamSettings}/>
        <Route exact path="" component={Login}/>
      </Switch>
    
  </Router>
      
      
    </div>
  );
}

export default App;
