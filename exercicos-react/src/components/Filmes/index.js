import React, { Component } from 'react';
import RoutesFilmes from './routes';
import './style.css'

class Filmes extends Component{
    render(){
        return(
            <div className="container-filmes">
                <RoutesFilmes></RoutesFilmes>
            </div>
        );
    }
}



export default Filmes