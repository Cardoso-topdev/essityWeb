import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//pages
import Index from './pages';
import Frecuentes from './pages/frecuentes';
import Nosotros from './pages/nosotros';
import Crece from './pages/crece';
import Comprar from './pages/comprar';
import Asesoria from './pages/asesoria';
import NotFound from './pages/notFound';
import Promociones from './pages/promociones';
import Cuestionario from './pages/cuestionario';
import Page1 from './pages/infografias/page1';
import Page2 from './pages/infografias/page2';
import Page3 from './pages/infografias/page3';
import Page4 from './pages/infografias/page4';
import Privacidad from './pages/privacidad';
import Terminos from './pages/terminos';
import Calendario from './pages/calendario';


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
        <Route exact path="/asesoria" component={Asesoria} />
        <Route exact path="/proteccion-femenina" component={Page1} />
        <Route exact path="/incontinencia-para-adulto" component={Page2} />
        <Route exact path="/papel-de-banio" component={Page3} />
        <Route exact path="/toallas-de-cocina" component={Page4} />
        <Route exact path="/cuestionario" component={Cuestionario} />
        <Route exact path="/politica-de-privacidad" component={Privacidad} />
        <Route exact path="/terminos-y-condiciones" component={Terminos} />
        <Route exact path="/fotografiascalendario" component={Calendario} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
