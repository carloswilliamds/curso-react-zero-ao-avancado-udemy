import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/header';
import Error from './pages/Error';
import Filme from './pages/Filme';
import Login from './pages/login'
import {autenticacao} from './components/Auth'

const PrivateRoute = ({component: Component, ...rest}) => (

    <Route {...rest} render={props => (
        autenticacao() ? (
            <Component {...props} />
        ):(
            <Redirect to={{pathname:"/login", state: {from: props.location} }} />
        )
    )} />
);


const RoutesFilmes = () => {
    return(
        <BrowserRouter>
        <Header></Header>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                {/* <Route exact path="/filme/:ok" component={Filme}></Route> */}
                <PrivateRoute exact path="/filme/:ok" component={Filme} />
                <Route exact path="*" component={Error}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default RoutesFilmes