import React, { Component } from 'react'
import './style.css'
import * as cronometro from '../../assets/img/cronometro.png'

class Cronometro extends Component{

    constructor(props){
        super(props);
        this.state = {
            cronometro: 0,
            botaoStartAndStop: "Start",
            acaoClass: "start"
        };
        this.contador = null;

        this.startAndStop = this.startAndStop.bind(this);
        this.zerar = this.zerar.bind(this);

        
    }

    startAndStop(){
        if(this.contador == null){
            this.contador = setInterval(() => {
                this.setState({cronometro: this.state.cronometro += 0.1})
            }, 100)
            this.setState({botaoStartAndStop: "Stop"})
            this.setState({acaoClass: "stop"})
        } else{
            clearInterval(this.contador);
            this.contador = null;
            this.setState({botaoStartAndStop: "Start"})
            this.setState({acaoClass: "start"})

        }
    }

    zerar(){
        clearInterval(this.contador);
        this.contador = null;
        this.state.cronometro = 0;
        this.setState(this.state);
        this.setState({botaoStartAndStop: "Start"})
    }


    render(){
        return(
            <div className="container-cronometro">
                <h1>Cronometro Abordagem</h1>
                <div className="box-cronometro">
                    <div className="timer">{this.state.cronometro.toFixed(1)}</div>
                </div>
                <div className="box-botoes">
                    <button className={this.state.acaoClass} onClick={this.startAndStop}>{this.state.botaoStartAndStop}</button>
                    <button className="zerar" onClick={this.zerar}>Zerar</button>
                </div>
            </div>
        );
    }
}




export default Cronometro