import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import "./style.css"

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: "Carregando..."
        };

        this.sair = this.sair.bind(this);
    }


    componentDidMount(){
        console.log(this.props.stateLogin, "header carregou")        
        // this.stateLogin()
        
        firebase.getUserName((infos) =>{
            this.setState({nome: infos.val().email})
          })
    }

    sair(){
        firebase.signOut().then(() =>{
           this.props.newStatus();
           console.log(this.props.stateLogin, this.state.stateLogina, "sair") 
        })
        this.props.history.push("/")
    }

    render(){
        return(
            <header className="header">
                <div className="container">
                    <h1><Link to="/">Blog React.Js</Link></h1>
                    
                    { this.props.stateLogin ? "Logado como " + this.state.nome  : <Link to="login" className="link-page-login">Login</Link>}
                    { this.props.stateLogin && <button onClick={this.sair}>Sair</button>  }
                    
                </div>
            </header>
        )
    }
}

export default Header