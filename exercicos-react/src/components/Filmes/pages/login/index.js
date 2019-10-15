import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {autenticacao} from '../../components/Auth';

class Login extends Component{

    render(){ 
        return(
            <div>
                <h1>Você precisa se logar para acessar os filmes</h1>
                <Link to="/">Voltar para Home</Link>
                {!!autenticacao() && <Redirect to="/"></Redirect>}
            </div>
        );
    }

}

export default Login