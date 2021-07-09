import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
      </Switch>
    </Router>
  );
}

export default App;
