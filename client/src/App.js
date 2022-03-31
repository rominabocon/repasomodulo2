import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateCharacter from "./components/CreateCharacter";
import Details from "./components/Details";
import Home from "./components/Home";

/* Aca en App vas a tener que, utilizando el Router, crear las distintas rutas que seran utilizadas
para renderizar los componentes en sus respectivos paths */


export default function App() {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path='/create' component={CreateCharacter} />
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/:id' component={Details} />
                </Switch>
            </div>
        </Router>
    );
}