import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './pages/Main'
import Repositorios from './pages/repositorios'
export default function Routes(){
     return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/repositorios" component={Repositorios} />

            </Switch>
        </BrowserRouter>
     )
}
