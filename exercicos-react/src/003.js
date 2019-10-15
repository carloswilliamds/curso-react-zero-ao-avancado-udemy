import React, { Component } from 'react'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            hora: "Aqui vai ser exibido a hora",
            atulizacao: ""
        };
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                hora: new Date().toLocaleTimeString(),
                atulizacao: "Atualizou as " + new Date().toLocaleTimeString()
            });
        },5000);
    };

    componentDidUpdate(){
        let atulizacaos = "Atualizou as " + this.state.hora;

        console.log(atulizacaos);
    }

    render(){
        return(
            <div>
                <h1>Hora</h1>
                <h2>{this.state.hora}</h2>
                <h2>{this.state.atulizacao}</h2>
            </div>
        );
    }
}

export default App