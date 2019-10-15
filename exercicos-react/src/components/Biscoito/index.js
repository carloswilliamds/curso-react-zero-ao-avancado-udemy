import React, { Component } from 'react'
import './style.css'

class Biscoito extends Component{

    constructor(props){
        super(props);
        this.state = {
            fraseAtual: "Frase Aleatoria..."
        };
        this.frases = ["Frase 1", "Frase 2", "Frase 3", "Frase 4", "Frase 5", "Frase 6"]

        this.mostrarFrase = this.mostrarFrase.bind(this);
    }

    mostrarFrase(){

        let numeroAleatorio = Math.floor(Math.random() * this.frases.length );
        this.setState({
            fraseAtual: this.frases[numeroAleatorio]
        })
    }

    render(){
        return(
            <div className="container">
                    <h1 className="title-biscoito">Biscoito Da sorte</h1>
                    <img src={require('../../assets/img/biscoito.png')} className="img-biscoito"></img>
                    <ButtonBiscoito nome="Abrir biscoito" acaoBtnBiscoito={this.mostrarFrase}  />
                    <h3 className="frase">{this.state.fraseAtual}</h3>
            </div>
        );
    }
}

class ButtonBiscoito extends Component{
    render(){
        return(
           <button className="btn" onClick={this.props.acaoBtnBiscoito} >{this.props.nome}</button>
        );
    }
}

export default Biscoito