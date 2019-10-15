import React, {Component} from "react"

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome,
            nomePadrao: props.nome
        }

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }


    entrar(){
        this.setState({
            nome: "Carlos William"
        });
    }

    sair(){
        if(this.state.nome !== this.state.nomePadrao){
            this.setState({
                nome: this.state.nomePadrao
            });
        }
    }


    render(){
        return(
            <div>
                <h1>Bem vindo: {this.state.nome}</h1>
                <button onClick={this.entrar}>Entrar como Carlos</button>
                {/* <button onClick={() => this.setState({ nome:" CARLOS"})}>Entrar como Carlos</button> */}
                <button onClick={this.sair}>Sair do App</button>
            </div>
        );
    }
}

export default Membro