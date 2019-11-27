import React, { Component } from 'react'
import './style.css'

class Biscoito extends Component{

    constructor(props){
        super(props);
        this.state = {
            fraseAtual: "Frase Aleatoria...",
            lastN: null
        };
        this.frases = ["Javascript !== Java", "Frase sem sentido", "Não delegue sua sorte a um biscoito", "Esse biscoito não sabe o que diz "]

        this.mostrarFrase = this.mostrarFrase.bind(this);
    }


    mostrarFrase(){

        
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length );
        console.log(this.state.lastN, numeroAleatorio)

        if(this.state.lastN === numeroAleatorio){

            numeroAleatorio = Math.floor(Math.random() * this.frases.length );

            if(this.state.lastN === numeroAleatorio){
                numeroAleatorio = Math.floor(Math.random() * this.frases.length );
            }

            this.setState({
                fraseAtual: this.frases[numeroAleatorio]
            })
        }else {
            this.setState({
                fraseAtual: this.frases[numeroAleatorio]
            })
        }

        this.setState({lastN: numeroAleatorio})
        console.log(this.state.lastN, numeroAleatorio)
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