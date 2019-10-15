import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            filmes: []
        };

        this.loaderFilmes = this.loaderFilmes.bind(this);
    }

    // https://sujeitoprogramador.com/r-api/?api=filmes/

    componentDidMount(){
        this.loaderFilmes();
    }

    loaderFilmes(){

        fetch('https://sujeitoprogramador.com/r-api/?api=filmes').then((res) => {

           return  res.json();

        }).then((listaJson) =>{
            this.setState({
                filmes: listaJson
            })
            console.log(listaJson);
        })
        
    }


    render(){
        return(
            <div className="lista-filmes">
                {this.state.filmes.map((item) => {
                    return(
                    <article key={item.id}>
                        <h2>{item.nome}</h2>
                        <img src={item.foto} alt="capa" />
                        <Link to={`/filme/${item.id}`} id={item.id} className="btn-acessar">Acessar</Link>
                    </article>
                    );
                })}
            </div>
        );
    }
}

export default Home