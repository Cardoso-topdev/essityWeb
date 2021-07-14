import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//pages
import Index from './pages';
import Frecuentes from './pages/frecuentes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/preguntas-frecuentes" component={Frecuentes} />
      </Switch>
    </Router>
  );
}

export default App;
