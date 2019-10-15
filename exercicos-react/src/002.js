import React, {Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: "Carlos William",
            contador: 0
        };
        
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let valor = this.state;
        valor.contador += 1;
        valor.nome = "Carlos aumentou";
        this.setState(valor)
    }

    diminuir(){
        let valor = this.state;
        if(valor.contador == 0){
            valor.nome = "Carlos Não pode ser menor que 0";
            this.setState(valor);
            return;
        }
        valor.contador -= 1;
        valor.nome = "Carlos diminuiu";
        this.setState(valor);
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h2>{this.state.nome}</h2>
                <h2>{this.state.contador}</h2>
                <button onClick={this.diminuir}>-</button>
                <button onClick={this.aumentar}>+</button>
            </div>
        )
    }
}

export default App;