import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//pages
import Index from './pages';
import Frecuentes from './pages/frecuentes';
import Nosotros from './pages/nosotros';
import Crece from './pages/crece';
import Comprar from './pages/comprar';
import NotFound from './pages/notFound';
import Promociones from './pages/promociones';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/preguntas-frecuentes" component={Frecuentes} />
        <Route exact path="/quienes-somos" component={Nosotros} />
        <Route exact path="/promociones" component={Promociones}/>
        <Route exact path="/crece-mi-negocio" component={Crece} />
        <Route exact path="/donde-comprar" component={Comprar} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
