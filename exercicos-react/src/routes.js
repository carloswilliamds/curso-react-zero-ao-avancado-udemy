import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Biscoito from "./components/Biscoito"
import Cronometro from "./components/Cronometro"
import MenuLinks from "./MenuLinks"
import Filmes from "./components/Filmes"
import Membro from "./components/Membro"
import PageJson from "./components/Pagejson"
import Todolist from "./components/Todolist"
import Hooks from './components/Hooks';






const Exercicios = () => {
    return(
        
        <BrowserRouter>
            <MenuLinks>

            </MenuLinks>
            <Switch>
                <Route exact path="/biscoito" component={Biscoito}></Route>
                <Route exact path="/cronometro" component={Cronometro}></Route>
                <Route exact path="/filmes" component={Filmes}></Route>
                <Route exact path="/pagejson" component={PageJson}></Route>
                <Route exact path="/todolist" component={Todolist}></Route>
                <Route exact path="/hooks" component={Hooks}></Route>




            </Switch>
        </BrowserRouter>
    );
}

export default Exercicios